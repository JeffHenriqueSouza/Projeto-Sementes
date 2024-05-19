// email-eh-unico.validator.ts
import { Injectable } from '@nestjs/common';
import { ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository'; // Corrija o caminho do import

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {} // Adicione o parâmetro ao construtor

  async validate(email: any, args: ValidationArguments) {
    const usuario = await this.usuarioRepository.findOneByEmail(email);
    return !usuario;
  }

  defaultMessage(args: ValidationArguments) {
    return 'O e-mail $value já está sendo usado por outra conta';
  }
}
