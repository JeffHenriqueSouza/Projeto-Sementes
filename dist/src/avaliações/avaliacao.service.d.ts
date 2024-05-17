import { Repository } from 'typeorm';
import { AvaliacaoEntity } from './avaliacao.entity';
import { CriarAvaliacaoDto } from './dto/criar-avaliacao.dto';
import { AtualizarAvaliacaoDto } from './dto/atualizar-avaliacao.dto';
export declare class AvaliacaoService {
    private avaliacaoRepository;
    constructor(avaliacaoRepository: Repository<AvaliacaoEntity>);
    criarAvaliacao(avaliacaoDto: CriarAvaliacaoDto): Promise<AvaliacaoEntity>;
    listarAvaliacoes(): Promise<AvaliacaoEntity[]>;
    buscarAvaliacaoPorId(id: string): Promise<AvaliacaoEntity>;
    atualizarAvaliacao(id: string, atualizarAvaliacaoDto: AtualizarAvaliacaoDto): Promise<AvaliacaoEntity>;
    removerAvaliacao(id: string): Promise<void>;
}
