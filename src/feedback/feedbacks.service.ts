import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { AvaliacaoEntity } from 'avaliacao/avaliacao.entity';


@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
    @InjectRepository(AvaliacaoEntity)
    private avaliacaoRepository: Repository<AvaliacaoEntity>,
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const { userId, message } = createFeedbackDto;
    const feedback = this.feedbackRepository.create({ userId, message });
    return await this.feedbackRepository.save(feedback);
  }

  async findAll(): Promise<Feedback[]> {
    return await this.feedbackRepository.find();
  }

  async getFeedbackForUser(userId: string): Promise<string> {
    const avaliacoes = await this.avaliacaoRepository.find({ where: { usuarioAvaliadoId: userId } });

    if (avaliacoes.length === 0) {
      return "Não há avaliações disponíveis para este usuário.";
    }

    const media = this.calculateAverage(avaliacoes);
    const feedback = this.generateFeedback(media);
    return feedback;
  }

  private calculateAverage(avaliacoes: AvaliacaoEntity[]): { [key: string]: number } {
    const soma = {
      comunicacao: 0,
      proatividade: 0,
      inteligenciaEmocional: 0,
      flexibilidade: 0,
      criatividade: 0,
      observacao: 0,
    };

    for (const avaliacao of avaliacoes) {
      soma.comunicacao += avaliacao.comunicacao;
      soma.proatividade += avaliacao.proatividade;
      soma.inteligenciaEmocional += avaliacao.inteligenciaEmocional;
      soma.flexibilidade += avaliacao.flexibilidade;
      soma.criatividade += avaliacao.criatividade;
      soma.observacao += avaliacao.observacao;
    }

    const totalAvaliacoes = avaliacoes.length;

    const media = {
      comunicacao: totalAvaliacoes > 0 ? soma.comunicacao / totalAvaliacoes : 0,
      proatividade: totalAvaliacoes > 0 ? soma.proatividade / totalAvaliacoes : 0,
      inteligenciaEmocional: totalAvaliacoes > 0 ? soma.inteligenciaEmocional / totalAvaliacoes : 0,
      flexibilidade: totalAvaliacoes > 0 ? soma.flexibilidade / totalAvaliacoes : 0,
      criatividade: totalAvaliacoes > 0 ? soma.criatividade / totalAvaliacoes : 0,
      observacao: totalAvaliacoes > 0 ? soma.observacao / totalAvaliacoes : 0,
    };

    return media;
  }

  private generateFeedback(media: { [key: string]: number }): string {
    const mediaGeral = (media.comunicacao + media.proatividade + media.inteligenciaEmocional + media.flexibilidade + media.criatividade + media.observacao) / 6;

    if (mediaGeral >= 3.5) {
      return "Parabéns pelo excelente desempenho em todas as habilidades! Continue mantendo o alto padrão de qualidade e inspire outros a fazer o mesmo.";
    } else if (mediaGeral >= 2.5) {
      return "Seu desempenho é sólido em todas as habilidades, mas ainda há espaço para aprimoramento. Identifique áreas específicas que podem ser aprimoradas e trabalhe nelas com dedicação.";
    } else if (mediaGeral >= 1.5) {
      return "Você está mostrando progresso em suas habilidades, porém ainda há espaço para melhorias substanciais. Dedique-se a praticar consistentemente para fortalecer suas habilidades.";
    } else {
      return "Seu desempenho ainda é insatisfatório em algumas áreas. Recomendamos focar em melhorar suas habilidades em todas as áreas.";
    }
  }
}
