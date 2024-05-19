import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async register(registerDTO: RegisterDTO): Promise<UsuarioEntity> {
    const { nome, email, password, cargo } = registerDTO;
  
    const newUser = new UsuarioEntity();
    newUser.nome = nome;
    newUser.email = email;
    newUser.password = await bcrypt.hash(password, 10);
    newUser.cargo = cargo;
  
    return this.usuarioRepository.save(newUser);
  }

  async findAllUsers(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.findAllUsers();
  }

  async validateUser(email: string, password: string): Promise<UsuarioEntity | null> {
    const user = await this.usuarioRepository.findOneByEmail(email);

    if (!user) {
      return null; // Usuário não encontrado
    }

    const senhaValida = await bcrypt.compare(password, user.password);

    if (!senhaValida) {
      return null; // Senha inválida
    }

    return user; // Credenciais válidas, retorna o usuário
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    return this.usuarioRepository.findOneByEmail(email);
  }
}
