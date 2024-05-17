import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedback.entity';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbacksService);
    create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
    findAll(): Promise<Feedback[]>;
    getFeedbackForUser(userId: string): Promise<string>;
}
