import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string; // Senha criptografada

  @Column()
  token: string; // Token gerado a partir da senha

  @Column({ nullable: true })
  cargo: string;
}
