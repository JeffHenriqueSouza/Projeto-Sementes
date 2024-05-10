import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './users/usuario.module'; 
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    UsuarioModule, 
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
