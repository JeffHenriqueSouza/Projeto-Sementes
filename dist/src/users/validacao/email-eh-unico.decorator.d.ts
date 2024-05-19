import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
export declare class EmailUnicoConstraint implements ValidatorConstraintInterface {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validate(email: string): Promise<boolean>;
}
export declare function IsEmailUnico(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
