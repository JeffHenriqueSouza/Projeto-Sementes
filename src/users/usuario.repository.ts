import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly userRepository: Repository<UsuarioEntity>,
  ) {}

  async save(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.userRepository.save(usuario);
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    console.log('Buscando usuário por e-mail:', email);
    const usuario = await this.userRepository.findOne({ where: { email } });
    console.log('Usuário encontrado:', usuario);
    return usuario || undefined;
  }
}
