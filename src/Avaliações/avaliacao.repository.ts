import {  Repository } from 'typeorm';
import { AvaliacaoEntity } from './avaliacao.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class AvaliacaoEntityRepository {

    constructor(
        @InjectRepository(AvaliacaoEntity)
        private avaliacaoRepository: Repository<AvaliacaoEntity >,
      ) {}
}

