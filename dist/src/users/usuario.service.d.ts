import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { RegisterDTO } from './dto/register.dto';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    register(registerDTO: RegisterDTO): Promise<UsuarioEntity>;
    validateUser(email: string, password: string): Promise<UsuarioEntity | null>;
    findOneByEmail(email: string): Promise<UsuarioEntity | undefined>;
}
