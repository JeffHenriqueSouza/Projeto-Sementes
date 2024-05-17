import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { AvaliacaoEntity } from 'avaliações/avaliacao.entity';
export declare class FeedbacksService {
    private feedbackRepository;
    private avaliacaoRepository;
    constructor(feedbackRepository: Repository<Feedback>, avaliacaoRepository: Repository<AvaliacaoEntity>);
    create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
    findAll(): Promise<Feedback[]>;
    getFeedbackForUser(userId: string): Promise<string>;
    private calculateAverage;
    private generateFeedback;
}
