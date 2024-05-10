import { UsuarioRepository } from '../usuario.repository';
import { ValidatorConstraintInterface } from 'class-validator';
export declare class EmailEhUnicoValidator implements ValidatorConstraintInterface {
    private usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    validate(email: string): Promise<boolean>;
    defaultMessage(): string;
}
