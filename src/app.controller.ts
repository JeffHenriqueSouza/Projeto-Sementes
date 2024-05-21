import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateFeedbackDto } from '/feedback/dto/create-feedback.dto'; 
import { Feedback } from './feedback/feedback.entity'; 
import { FeedbacksService } from 'feedback/feedbacks.service';  

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly feedbackService: FeedbacksService, 
  ) {}

  @Post('feedbacks')
  async createFeedback(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Get('feedbacks')
  async getAllFeedbacks(): Promise<Feedback[]> {
    return this.feedbackService.findAll();
  }
}
