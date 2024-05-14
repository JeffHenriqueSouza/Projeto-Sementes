// usuario.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service'; // Importe o UsuarioService
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './entity/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository], // Inclua UsuarioService nos providers
})
export class UsuarioModule {}
