// usuario.service.ts
import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './entity/usuario.entity';
import { AtualizaUsuarioDTO } from './dto/update-user.dto';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async salvar(usuario: UsuarioEntity) {
    return await this.usuarioRepository.salvar(usuario);
  }

  async listar() {
    return await this.usuarioRepository.listar();
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<AtualizaUsuarioDTO>) {
    return await this.usuarioRepository.atualiza(id, dadosDeAtualizacao);
  }

  async remove(id: string) {
    return await this.usuarioRepository.remove(id);
  }

  async buscarPorNomeECargo(nome: string, cargo: string) {
    // Certifique-se de que está usando o nome e o cargo para filtrar os usuários
    return await this.usuarioRepository.buscarPorNomeECargo(nome, cargo);
  }
}
