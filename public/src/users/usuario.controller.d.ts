import { AtualizaUsuarioDTO } from './dto/update-user.dto';
import { CriaUsuarioDTO } from './dto/create-user.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioRepository } from './usuario.repository';
export declare class UsuarioController {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        mensagem: string;
    }>;
    listUsuarios(): Promise<ListaUsuarioDTO[]>;
    atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        mensagem: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        mensagem: string;
    }>;
}
