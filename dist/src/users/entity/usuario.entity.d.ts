export declare class UsuarioEntity {
    id: string;
    nome: string;
    email: string;
    senha: string;
    cargo: string;
    encryptPassword(): Promise<void>;
}
