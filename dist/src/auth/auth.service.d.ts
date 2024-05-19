import { UsuarioService } from '../users/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from '../users/entity/usuario.entity';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    login(user: UsuarioEntity): Promise<{
        access_token: string;
    }>;
}
