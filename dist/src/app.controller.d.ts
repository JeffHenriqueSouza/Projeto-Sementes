import { AppService } from './app.service';
import { CreateFeedbackDto } from '/feedback/dto/create-feedback.dto';
import { Feedback } from './feedback/feedback.entity';
import { FeedbacksService } from 'feedback/feedbacks.service';
export declare class AppController {
    private readonly appService;
    private readonly feedbackService;
    constructor(appService: AppService, feedbackService: FeedbacksService);
    getHello(): string;
    createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
    getAllFeedbacks(): Promise<Feedback[]>;
}
