// auth.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UsuarioModule } from '../users/usuario.module'; 

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_jwt_secret', // Altere para uma chave secreta forte
      signOptions: { expiresIn: '60m' },
    }),
    forwardRef(() => UsuarioModule), // Usando forwardRef para resolver a dependência circular
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
