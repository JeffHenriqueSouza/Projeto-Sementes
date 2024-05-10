// update-user.dto.ts

import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class AtualizaUsuarioDTO {
  // Nome do usuário
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string = '';

  // Endereço de e-mail do usuário
  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  email: string = '';

  // Senha do usuário (deve ter pelo menos 6 caracteres)
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  senha: string = '';

  
}
