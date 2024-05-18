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
    buscarPorNome(nome: string): Promise<UsuarioEntity[]>;
    buscarPorCargo(cargo: string): Promise<UsuarioEntity[]>;
    buscarPorNomeECargo(nome: string, cargo: string): Promise<UsuarioEntity[]>;
    findOneByUsername(username: string): Promise<UsuarioEntity | undefined>;
    findOneByEmail(email: string): Promise<UsuarioEntity | undefined>;
}
