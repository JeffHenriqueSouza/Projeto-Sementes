import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity'; 

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private userRepository: Repository<UsuarioEntity>,
  ) {}

  async salvar(usuario: UsuarioEntity) {
    const objeto = this.userRepository.create(usuario);
    return await this.userRepository.save(objeto);
  }

  async listar() {
    return await this.userRepository.find();
  }

  async existeComEmail(email: string) {
    const possivelUsuario = await this.userRepository.findOne({ where: { email } });
    return !!possivelUsuario;
  }

  async buscaPorId(id: string) {
    const usuario = await this.userRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    return usuario;
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    await this.userRepository.update(id, dadosDeAtualizacao);
    return await this.buscaPorId(id);
  }

  async remove(id: string) {
    const usuarioRemovido = await this.buscaPorId(id);
    await this.userRepository.delete(id);
    return usuarioRemovido;
  }

  async buscarPorNome(nome: string) {
    return await this.userRepository.find({ where: { nome: Like(`%${nome}%`) } });
  }

  async buscarPorCargo(cargo: string) {
    return await this.userRepository.find({ where: { cargo: Like(`%${cargo}%`) } });
  }

  async buscarPorNomeECargo(nome: string, cargo: string) {
    return await this.userRepository.find({ where: { nome, cargo } });
  }

  async findOneByUsername(username: string): Promise<UsuarioEntity | undefined> {
    const user = await this.userRepository.findOne({ where: { nome: username } });
    return user || undefined;
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user || undefined;
  }
}
