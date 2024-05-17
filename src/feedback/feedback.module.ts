import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback.entity';
import { FeedbackController } from './feedback.controller';
import { FeedbacksService } from './feedbacks.service';
import { AvaliacaoModule } from '../avaliacao/avaliacao.module';
import { AvaliacaoEntity } from '../avaliacao/avaliacao.entity';
import { AvaliacaoEntityRepository } from '../avaliacao/avaliacao.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([Feedback, AvaliacaoEntity]),
    AvaliacaoModule 
  ],
  controllers: [FeedbackController], 
  providers: [FeedbacksService, AvaliacaoEntityRepository], 
  exports: [FeedbacksService], 
})
export class FeedbackModule {}
