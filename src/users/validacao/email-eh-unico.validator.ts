import { Injectable } from '@nestjs/common';
import { ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository'; 

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {} 

  async validate(email: any, args: ValidationArguments) {
    const usuario = await this.usuarioRepository.findOneByEmail(email);
    return !usuario;
  }

  defaultMessage(args: ValidationArguments) {
    return 'O e-mail $value já está sendo usado por outra conta';
  }
}
