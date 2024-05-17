import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateFeedbackDto } from '/feedback/dto/create-feedback.dto'; // Importe o DTO para criar feedbacks
import { Feedback } from './feedback/feedback.entity'; // Importe a entidade de feedback
import { FeedbacksService } from 'feedback/feedbacks.service';  // Importe o serviço de feedback

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly feedbackService: FeedbacksService, // Injete o serviço de feedback
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('feedbacks')
  async createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Get('feedbacks')
  async getAllFeedbacks(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
  }
}
