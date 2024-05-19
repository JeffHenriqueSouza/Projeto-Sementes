import { AuthService } from '../auth/auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private authService;
    private usuarioService;
    constructor(authService: AuthService, usuarioService: UsuarioService);
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
}
