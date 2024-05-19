import { Body, Controller, Post, UsePipes, ValidationPipe, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UsuarioService } from './usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'; // Adicionado import

@Controller('/usuarios')
export class UsuarioController {
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private jwtService: JwtService, // Adicionado injeção de dependência
  ) {}

  @Post('/register')
  @UsePipes(new ValidationPipe())
  async register(@Body() registerDTO: RegisterDTO) {
    const existingUser = await this.usuarioService.findOneByEmail(registerDTO.email);
    if (existingUser) {
      return { message: 'E-mail já registrado' };
    }

    // Antes de salvar o usuário, vamos gerar um hash para a senha
    const hashedPassword = await bcrypt.hash(registerDTO.senha, 10);
    // Substitua a senha no DTO pela senha criptografada
    registerDTO.senha = hashedPassword;

    // Agora registramos o usuário com a senha criptografada
    const newUser = await this.usuarioService.register(registerDTO);
    // Após o registro, geramos o token para o novo usuário
    const token = await this.authService.login(newUser);
    return { message: 'Usuário registrado com sucesso', user: newUser, token };
  }

  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<{ token: string }> {
    const { email, password } = loginDTO;

    // Verifica se o usuário está cadastrado no banco de dados
    const user = await this.usuarioService.validateUser(email, password);

    if (!user) {
      // Se o usuário não estiver cadastrado, retorna uma mensagem de erro
      throw new UnauthorizedException('Usuário não cadastrado');
    }

    // Se o usuário estiver cadastrado e a senha estiver correta, gera um token JWT
    const token = this.jwtService.sign({ userId: user.id });

    // Retorna o token JWT
    return { token };
  }
}
