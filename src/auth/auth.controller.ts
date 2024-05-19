import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../users/usuario.service';
import { LoginDTO } from '../users/dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

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
