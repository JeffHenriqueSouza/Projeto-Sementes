import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UsuarioService } from './usuario.service';

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

    const newUser = await this.usuarioService.register(registerDTO);
    return { message: 'Usuário registrado com sucesso', user: newUser };
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.authService.validateUser(loginDTO.username, loginDTO.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }

    return this.authService.login(user);
  }
}
