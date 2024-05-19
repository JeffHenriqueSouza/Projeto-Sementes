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
  
    const newUser = await this.usuarioRepository.save({
      nome,
      email,
      password: await bcrypt.hash(password, 10),
      cargo,
    });
  
    return newUser;
  }
  
  
  
  
  async validateUser(email: string, password: string): Promise<UsuarioEntity | null> {
    const user = await this.usuarioRepository.findOneByEmail(email);

    if (!user) {
      return null; // Usuário não encontrado
    }

    // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados
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
