import { AtualizaUsuarioDTO } from './dto/update-user.dto';
import { CriaUsuarioDTO } from './dto/create-user.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        mensagem: string;
    }>;
    listUsuarios(): Promise<UsuarioEntity[]>;
    atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        mensagem: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        mensagem: string;
    }>;
    buscarUsuarios(nome: string, cargo: string): Promise<UsuarioEntity[]>;
}
