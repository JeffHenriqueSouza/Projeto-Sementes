import { Repository } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
export declare class UsuarioRepository {
    private userRepository;
    constructor(userRepository: Repository<UsuarioEntity>);
    salvar(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    listar(): Promise<UsuarioEntity[]>;
    existeComEmail(email: string): Promise<boolean>;
    buscaPorId(id: string): Promise<UsuarioEntity>;
    atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    remove(id: string): Promise<UsuarioEntity>;
}
