import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
export declare class EmailEhUnicoConstraint implements ValidatorConstraintInterface {
    private readonly usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validate(email: string): Promise<boolean>;
}
export declare function EmailEhUnico(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
