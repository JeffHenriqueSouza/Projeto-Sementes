import { IsEmail, IsString } from 'class-validator';

export class RegisterDTO {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  cargo: string;
}
