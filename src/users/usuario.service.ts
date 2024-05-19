// usuario.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async register(registerDTO: RegisterDTO): Promise<UsuarioEntity> {
    const newUser = new UsuarioEntity(); // Criar nova instância de UsuarioEntity
    newUser.nome = registerDTO.nome;
    newUser.email = registerDTO.email;
    newUser.senha = registerDTO.senha;
    newUser.cargo = registerDTO.cargo;

    return this.usuarioRepository.save(newUser); // Retornar o novo usuário salvo
  }

  async validateUser(email: string, password: string): Promise<UsuarioEntity | null> {
    // Implementação da validação do usuário
    return null; // Placeholder para evitar erro, substitua pelo código real
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    // Implementação para encontrar um usuário pelo email
    return undefined; // Placeholder para evitar erro, substitua pelo código real
  }
}
