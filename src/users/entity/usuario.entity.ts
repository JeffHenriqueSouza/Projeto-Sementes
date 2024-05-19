import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('usuarios')
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column({ nullable: true })
  cargo: string;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
}
