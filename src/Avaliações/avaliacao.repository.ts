import { EntityRepository, Repository } from 'typeorm';
import { AvaliacaoEntity } from './avaliacao.entity';

@EntityRepository(AvaliacaoEntity)
export class AvaliacaoEntityRepository extends Repository<AvaliacaoEntity> {}
