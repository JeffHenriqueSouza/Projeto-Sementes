import { Body, Controller, Post, UsePipes, ValidationPipe, UnauthorizedException,Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from './entity/usuario.entity';

@Controller('/usuarios')
export class UsuarioController {
  constructor(
    
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  @Post('/register')
  @UsePipes(new ValidationPipe())
  async register(@Body() registerDTO: RegisterDTO) {
    const existingUser = await this.usuarioService.findOneByEmail(registerDTO.email);
    if (existingUser) {
      return { message: 'E-mail já registrado' };
    }

    const newUser = await this.usuarioService.register(registerDTO);
    const token = this.jwtService.sign({ userId: newUser.id });
    return { message: 'Usuário registrado com sucesso', user: newUser, token };
  }

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
  
  @Get()
  async findAllUsers(): Promise<UsuarioEntity[]> {
    return this.usuarioService.findAllUsers();
  }
}
