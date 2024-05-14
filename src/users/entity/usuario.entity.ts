import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string = '';

  @Column()
  nome: string = '';

  @Column()
  email: string = '';

  @Column()
  senha: string = '';

  @Column({ nullable: true })
  cargo: string;

}
