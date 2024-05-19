// email-eh-unico.decorator.ts
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository'; // Corrija o caminho do import

@ValidatorConstraint({ async: true })
export class EmailUnicoConstraint implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {} // Adicione o parâmetro ao construtor

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
