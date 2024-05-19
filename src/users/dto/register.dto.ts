import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDTO {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  senha: string;

  @IsString()
  cargo: string;
}