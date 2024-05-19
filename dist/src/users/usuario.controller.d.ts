import { AuthService } from '../auth/auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UsuarioService } from './usuario.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsuarioController {
    private authService;
    private usuarioService;
    private jwtService;
    constructor(authService: AuthService, usuarioService: UsuarioService, jwtService: JwtService);
    register(registerDTO: RegisterDTO): Promise<{
        message: string;
        user?: undefined;
        token?: undefined;
    } | {
        message: string;
        user: import("./entity/usuario.entity").UsuarioEntity;
        token: {
            access_token: string;
        };
    }>;
    login(loginDTO: LoginDTO): Promise<{
        token: string;
    }>;
}
