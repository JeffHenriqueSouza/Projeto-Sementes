// No seu controlador
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { AtualizaUsuarioDTO } from './dto/update-user.dto';
import { CriaUsuarioDTO } from './dto/create-user.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './entity/usuario.entity'; 
import { UsuarioService } from './usuario.service';
import { AuthService } from '../auth/auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity(); 
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = await bcrypt.hash(dadosDoUsuario.senha, 10);
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.cargo = dadosDoUsuario.cargo;

    const newUser = await this.usuarioService.salvar(usuarioEntity);

    return {
      usuario: new ListaUsuarioDTO(newUser.id, newUser.nome),
      mensagem: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listUsuarios() {
    return await this.usuarioService.listar();
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    // Se não houver um ID na rota, gere um UUID
    if (!id) {
      id = uuidv4();
    }

    const usuarioAtualizado = await this.usuarioService.atualiza(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      mensagem: 'usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    // Se não houver um ID na rota, gere um UUID
    if (!id) {
      id = uuidv4();
    }

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
    return await this.usuarioService.buscarPorNomeECargo(nome, cargo);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.usuarioService.validateUser(loginDTO.username, loginDTO.password);
    if (!user) {
      return {
        message: 'Invalid credentials',
      };
    }
    
    return this.authService.login(user);
  }

  @Post('/register')
  @UsePipes(new ValidationPipe())
  async register(@Body() registerDTO: RegisterDTO) {
    const existingUser = await this.usuarioService.findOneByEmail(registerDTO.email);
    if (existingUser) {
      return { message: 'E-mail já registrado' };
    }

    const newUser = await this.usuarioService.register(registerDTO);
    return { message: 'Usuário registrado com sucesso', user: newUser };
  }
}
