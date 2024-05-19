import { UsuarioService } from './usuario.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from './entity/usuario.entity';
export declare class UsuarioController {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    register(registerDTO: RegisterDTO): Promise<{
        message: string;
        user?: undefined;
        token?: undefined;
    } | {
        message: string;
        user: UsuarioEntity;
        token: string;
    }>;
    login(loginDTO: LoginDTO): Promise<{
        token: string;
    }>;
    findAllUsers(): Promise<UsuarioEntity[]>;
}
