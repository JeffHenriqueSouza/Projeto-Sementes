import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UsuarioService } from './usuario.service';
import * as bcrypt from 'bcrypt';


@Controller('/usuarios')
export class UsuarioController {
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
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

  @Post('/login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.usuarioService.validateUser(loginDTO.email, loginDTO.password); // Corrigido de "senha" para "password"
    if (!user) {
      return { message: 'Credenciais inválidas' };
    }

    const token = await this.authService.login(user);
    return { message: 'Login bem-sucedido', user, token };
  }
}
