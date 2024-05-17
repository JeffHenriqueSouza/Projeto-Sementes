import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './entity/usuario.entity';
import { AtualizaUsuarioDTO } from './dto/update-user.dto';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    salvar(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    listar(): Promise<UsuarioEntity[]>;
    atualiza(id: string, dadosDeAtualizacao: Partial<AtualizaUsuarioDTO>): Promise<UsuarioEntity>;
    remove(id: string): Promise<UsuarioEntity>;
    buscarPorNomeECargo(nome: string, cargo: string): Promise<UsuarioEntity[]>;
}
