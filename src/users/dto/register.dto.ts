import { IsEmail, IsString } from 'class-validator';

export class RegisterDTO {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;

  @IsString()
  cargo: string;
}
