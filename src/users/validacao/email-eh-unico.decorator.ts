import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';

@ValidatorConstraint({ async: true })
export class EmailEhUnicoConstraint implements ValidatorConstraintInterface {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async validate(email: string) {
    const usuario = await this.usuarioRepository.existeComEmail(email);
    return !usuario;
  }
}

export function EmailEhUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'emailEhUnico',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: EmailEhUnicoConstraint,
    });
  };
}
