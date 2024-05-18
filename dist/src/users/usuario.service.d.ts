import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { RegisterDTO } from './dto/register.dto';
export declare class UsuarioService {
    private usuarioRepository;
    private jwtService;
    constructor(usuarioRepository: UsuarioRepository, jwtService: JwtService);
    salvar(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    listar(): Promise<UsuarioEntity[]>;
    atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    remove(id: string): Promise<UsuarioEntity>;
    buscarPorNomeECargo(nome: string, cargo: string): Promise<UsuarioEntity[]>;
    findOneByUsername(username: string): Promise<UsuarioEntity | undefined>;
    findOneByEmail(email: string): Promise<UsuarioEntity | undefined>;
    register(registerDTO: RegisterDTO): Promise<UsuarioEntity>;
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
