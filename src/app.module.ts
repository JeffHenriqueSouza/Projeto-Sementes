import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './users/usuario.module'; 
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { FeedbackModule } from './feedback/feedback.module'; 

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsuarioModule, 
    DatabaseModule,
    AvaliacaoModule,
    FeedbackModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
