import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedback.entity';

@Controller('/feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbacksService) {}

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  async findAll(): Promise<string[]> {
    return await this.feedbackService.generateFeedbacks();
  }
  
  @Get('/user/:userId')
async getFeedbackForUser(@Param('userId') userId: string): Promise<string> {
  return this.feedbackService.getFeedbackForUser(userId);
}

}
