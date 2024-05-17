import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvaliacaoEntity } from './avaliacao.entity';
import { CriarAvaliacaoDto } from './dto/criar-avaliacao.dto';
import { AtualizarAvaliacaoDto } from './dto/atualizar-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(
    @InjectRepository(AvaliacaoEntity)
    private avaliacaoRepository: Repository<AvaliacaoEntity>,
  ) {}

  async criarAvaliacao(avaliacaoDto: CriarAvaliacaoDto): Promise<AvaliacaoEntity> {
    const novaAvaliacao = this.avaliacaoRepository.create(avaliacaoDto);
    return await this.avaliacaoRepository.save(novaAvaliacao);
  }

  async listarAvaliacoes(): Promise<AvaliacaoEntity[]> {
    return await this.avaliacaoRepository.find();
  }

  async buscarAvaliacaoPorId(id: string): Promise<AvaliacaoEntity> {
    const avaliacao = await this.avaliacaoRepository.findOne({ where: { id } });
    if (!avaliacao) {
      throw new NotFoundException('Avaliação não encontrada.');
    }
    return avaliacao;
  }

  async atualizarAvaliacao(id: string, atualizarAvaliacaoDto: AtualizarAvaliacaoDto): Promise<AvaliacaoEntity> {
    const avaliacao = await this.buscarAvaliacaoPorId(id);
    this.avaliacaoRepository.merge(avaliacao, atualizarAvaliacaoDto);
    return await this.avaliacaoRepository.save(avaliacao);
  }

  async removerAvaliacao(id: string): Promise<void> {
    const resultado = await this.avaliacaoRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException('Avaliação não encontrada.');
    }
  }

  
}
