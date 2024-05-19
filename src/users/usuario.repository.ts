import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async salvar(usuario: UsuarioEntity) {
    const objeto = this.usuarioRepository.create(usuario);
    return await this.usuarioRepository.save(objeto);
  }

  async listar() {
    return await this.usuarioRepository.find();
  }

  async existeComEmail(email: string) {
    const possivelUsuario = await this.usuarioRepository.findOne({ where: { email } });
    return !!possivelUsuario;
  }

  async buscaPorId(id: string) {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    return usuario;
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    const user = await this.usuarioRepository.findOne({ where: { email } });
    return user || undefined;
  }

  async findOneByPassword(password: string): Promise<UsuarioEntity | undefined> {
    const user = await this.usuarioRepository.findOne({ where: { password } });
    return user || undefined;
  }
  
}
