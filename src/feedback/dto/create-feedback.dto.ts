import { IsNotEmpty } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  message: string;
}
