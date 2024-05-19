import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async findOneByEmail(email: string): Promise<UsuarioEntity | null> {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  async validateUser(email: string, senha: string): Promise<UsuarioEntity | null> {
    const user = await this.findOneByEmail(email);
    if (user && await bcrypt.compare(senha, user.senha)) {
      const { senha, ...result } = user;
      return result as UsuarioEntity;
    }
    return null;
  }

  async register(registerDTO: RegisterDTO): Promise<UsuarioEntity> {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = registerDTO.email;
    usuarioEntity.senha = await bcrypt.hash(registerDTO.senha, 10);
    usuarioEntity.nome = registerDTO.nome;
    usuarioEntity.cargo = registerDTO.cargo;

    return this.usuarioRepository.save(usuarioEntity);
  }
}
