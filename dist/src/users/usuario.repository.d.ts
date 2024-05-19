import { Repository } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
import { RegisterDTO } from './dto/register.dto';
export declare class UsuarioRepository {
    private userRepository;
    constructor(userRepository: Repository<UsuarioEntity>);
    save(registerDTO: RegisterDTO): Promise<UsuarioEntity>;
    findOneByEmail(email: string): Promise<UsuarioEntity | undefined>;
}
