import { AvaliacaoService } from './avaliacao.service';
import { CriarAvaliacaoDto } from './dto/criar-avaliacao.dto';
import { AvaliacaoEntity } from './avaliacao.entity';
export declare class AvaliacaoController {
    private readonly avaliacaoService;
    constructor(avaliacaoService: AvaliacaoService);
    criarAvaliacao(criarAvaliacaoDto: CriarAvaliacaoDto): Promise<AvaliacaoEntity>;
    listarAvaliacoes(): Promise<AvaliacaoEntity[]>;
    buscarAvaliacaoPorId(id: string): Promise<AvaliacaoEntity>;
    atualizarAvaliacao(id: string, criarAvaliacaoDto: CriarAvaliacaoDto): Promise<AvaliacaoEntity>;
    removerAvaliacao(id: string): Promise<void>;
}
