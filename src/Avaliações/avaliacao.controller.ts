import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CriarAvaliacaoDto } from './dto/criar-avaliacao.dto';
import { AvaliacaoEntity } from './avaliacao.entity';

@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post('/criar')
  async criarAvaliacao(@Body() criarAvaliacaoDto: CriarAvaliacaoDto): Promise<AvaliacaoEntity> {
    return this.avaliacaoService.criarAvaliacao(criarAvaliacaoDto);
  }

  @Get()
  async listarAvaliacoes(): Promise<AvaliacaoEntity[]> {
    return this.avaliacaoService.listarAvaliacoes();
  }

  @Get(':id')
  async buscarAvaliacaoPorId(@Param('id') id: string): Promise<AvaliacaoEntity> {
    return this.avaliacaoService.buscarAvaliacaoPorId(id);
  }

  @Put(':id')
  async atualizarAvaliacao(
    @Param('id') id: string,
    @Body() criarAvaliacaoDto: CriarAvaliacaoDto,
  ): Promise<AvaliacaoEntity> {
    return this.avaliacaoService.atualizarAvaliacao(id, criarAvaliacaoDto);
  }

  @Delete(':id')
  async removerAvaliacao(@Param('id') id: string): Promise<void> {
    return this.avaliacaoService.removerAvaliacao(id);
  }
}
