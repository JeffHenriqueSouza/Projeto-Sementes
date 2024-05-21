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

    const user = await this.usuarioService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Usuário não cadastrado');
    }

    const token = this.jwtService.sign({ userId: user.id });
    
    return { token };
  }
}
