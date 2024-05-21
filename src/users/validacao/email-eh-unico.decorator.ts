import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository'; 

@ValidatorConstraint({ async: true })
export class EmailUnicoConstraint implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {} 

  async validate(email: string) {
    const usuario = await this.usuarioRepository.findOneByEmail(email);
    return !usuario;
  }
}

export function IsEmailUnico(validationOptions?: ValidationOptions) {
  return function(object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: EmailUnicoConstraint,
    });
  };
}
