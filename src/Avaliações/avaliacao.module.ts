// avaliacao.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliacaoController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoEntity } from './avaliacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AvaliacaoEntity])],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
