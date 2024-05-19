import { UsuarioService } from '../users/usuario.service';
import { LoginDTO } from '../users/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    login(loginDTO: LoginDTO): Promise<{
        token: string;
    }>;
}
