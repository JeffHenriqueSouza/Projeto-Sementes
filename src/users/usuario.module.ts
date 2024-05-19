// usuario.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service'; 
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './entity/usuario.entity';
import { JwtModule } from '@nestjs/jwt'; 
import { AuthService } from '../auth/auth.service'; 


@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioEntity]), 
    JwtModule.register({
      secret: 'your_jwt_secret', // Altere para uma chave secreta forte
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository, AuthService], // Adicione o AuthService aos providers
})
export class UsuarioModule {}
