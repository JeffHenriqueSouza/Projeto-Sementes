import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioEntity } from './entity/usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsuarioService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private jwtService: JwtService
  ) {}

  async salvar(usuario: UsuarioEntity) {
    return await this.usuarioRepository.salvar(usuario);
  }

  async listar() {
    return await this.usuarioRepository.listar();
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    // Verifica se o ID está vazio ou nulo
    if (!id) {
      console.error("ID está vazio ou nulo");
      // Adicione tratamento de erro ou retorno apropriado aqui
      throw new Error('ID está vazio ou nulo');
    }

    return await this.usuarioRepository.atualiza(id, dadosDeAtualizacao);
  }

  async remove(id: string) {
    if (!id) {
      console.error("ID está vazio ou nulo");
      throw new Error('ID está vazio ou nulo');
    }

    return await this.usuarioRepository.remove(id);
  }

  async buscarPorNomeECargo(nome: string, cargo: string) {
    return await this.usuarioRepository.buscarPorNomeECargo(nome, cargo);
  }

  async findOneByUsername(username: string): Promise<UsuarioEntity | undefined> {
    return await this.usuarioRepository.findOneByUsername(username);
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    return await this.usuarioRepository.findOneByEmail(email);
  }

  async register(registerDTO: RegisterDTO): Promise<UsuarioEntity> {
    const hashedPassword = await bcrypt.hash(registerDTO.senha, 10);

    const newUser = new UsuarioEntity();
    newUser.nome = registerDTO.nome;
    newUser.email = registerDTO.email;
    newUser.senha = hashedPassword;
    newUser.cargo = registerDTO.cargo;

    return await this.usuarioRepository.salvar(newUser);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOneByUsername(username);
    if (user && await bcrypt.compare(pass, user.senha)) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.nome, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
