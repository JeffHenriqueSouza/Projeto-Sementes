// usuario.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { AtualizaUsuarioDTO } from './dto/update-user.dto';
import { CriaUsuarioDTO } from './dto/create-user.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './entity/usuario.entity'; 
import { UsuarioService } from './usuario.service'; // Importe o UsuarioService

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {} // Injete o UsuarioService

  @Post()
  @UsePipes(new ValidationPipe())
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity(); 
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.id = uuid();
    usuarioEntity.cargo = dadosDoUsuario.cargo;

    // Use o serviço para salvar o usuário
    await this.usuarioService.salvar(usuarioEntity);

    return {
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      mensagem: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listUsuarios() {
    // Use o serviço para listar os usuários
    return await this.usuarioService.listar();
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    // Use o serviço para atualizar o usuário
    const usuarioAtualizado = await this.usuarioService.atualiza(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      mensagem: 'usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    // Use o serviço para remover o usuário
    const usuarioRemovido = await this.usuarioService.remove(id);

    return {
      usuario: usuarioRemovido,
      mensagem: 'usuário removido com sucesso',
    };
  }

  @Get('/buscar')
  async buscarUsuarios(
    @Query('nome') nome: string,
    @Query('cargo') cargo: string,
  ) {
    // Use o serviço para buscar usuários e retorne apenas o nome e o cargo
    return await this.usuarioService.buscarPorNomeECargo(nome, cargo);
  }
}
