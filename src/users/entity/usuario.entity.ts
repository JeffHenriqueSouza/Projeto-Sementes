import { Entity, Column, PrimaryColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'; // Importe a função v4 para gerar UUIDs
import * as bcrypt from 'bcrypt';


@Entity('usuarios')
export class UsuarioEntity {
  @PrimaryColumn('uuid')
  id: string = '';

  @Column()
  nome: string = '';

  @Column()
  email: string = '';

  @Column()
  senha: string = '';

  @Column({ nullable: true })
  cargo: string;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPassword() {
    this.senha = await bcrypt.hash(
      this.senha,
      10,
    );
  }

  @BeforeInsert()
  generateUuid() {
    // Verifica se o ID já foi atribuído
    if (!this.id) {
      this.id = uuidv4(); // Gera um UUID v4 válido
    }
  }
}
