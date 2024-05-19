import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private userRepository: Repository<UsuarioEntity>,
  ) {}

  async save(registerDTO: RegisterDTO): Promise<UsuarioEntity> {
    const newUser = this.userRepository.create(registerDTO);
    return this.userRepository.save(newUser);
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    const usuario = await this.userRepository.findOne({ where: { email } });
    return usuario || undefined;
}

}