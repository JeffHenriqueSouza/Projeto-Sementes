import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliacaoController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoEntity } from './avaliacao.entity';
import { AvaliacaoEntityRepository } from './avaliacao.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AvaliacaoEntity, AvaliacaoEntityRepository])],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
