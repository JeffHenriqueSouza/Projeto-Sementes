import { AtualizaUsuarioDTO } from './dto/update-user.dto';
import { CriaUsuarioDTO } from './dto/create-user.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioService } from './usuario.service';
import { AuthService } from '../auth/auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
export declare class UsuarioController {
    private usuarioService;
    private authService;
    constructor(usuarioService: UsuarioService, authService: AuthService);
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
    login(loginDTO: LoginDTO): Promise<{
        access_token: string;
    } | {
        message: string;
    }>;
    register(registerDTO: RegisterDTO): Promise<{
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: UsuarioEntity;
    }>;
}
