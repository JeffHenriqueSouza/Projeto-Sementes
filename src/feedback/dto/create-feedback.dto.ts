// create-feedback.dto.ts

import { IsNotEmpty } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  message: string;
}
