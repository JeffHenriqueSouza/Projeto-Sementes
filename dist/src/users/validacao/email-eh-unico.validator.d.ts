import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validate(email: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
