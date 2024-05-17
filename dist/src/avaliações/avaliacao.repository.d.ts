import { Repository } from 'typeorm';
import { AvaliacaoEntity } from './avaliacao.entity';
export declare class AvaliacaoEntityRepository {
    private avaliacaoRepository;
    constructor(avaliacaoRepository: Repository<AvaliacaoEntity>);
}
