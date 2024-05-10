import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from '../usuario.repository';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@Injectable()
@ValidatorConstraint({ name: 'emailUnico', async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(email: string) {
    const usuario = await this.usuarioRepository.existeComEmail(email);
    return !usuario;
  }

  defaultMessage() {
    return 'O email já está em uso';
  }
}
