import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async register(registerDTO: RegisterDTO): Promise<UsuarioEntity> {
    const newUser = new UsuarioEntity();
    newUser.nome = registerDTO.nome;
    newUser.email = registerDTO.email;
    newUser.senha = await bcrypt.hash(registerDTO.senha, 10); // Criptografa a senha
    newUser.token = await bcrypt.hash(registerDTO.senha, 10); // Gera um token a partir da senha criptografada
    newUser.cargo = registerDTO.cargo;

    return this.usuarioRepository.salvar(newUser);
  }

  async validateUser(email: string, password: string): Promise<UsuarioEntity | null> {
    const user = await this.usuarioRepository.findOneByEmail(email);

    if (!user) {
      return null; // Usuário não encontrado
    }

    // Verifica se a senha fornecida corresponde à senha criptografada no banco de dados
    const senhaValida = await bcrypt.compare(password, user.senha);

    if (!senhaValida) {
      return null; // Senha inválida
    }

    return user; // Credenciais válidas, retorna o usuário
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    return this.usuarioRepository.findOneByEmail(email);
  }
}
