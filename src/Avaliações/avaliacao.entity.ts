import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AvaliacaoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuarioAvaliadoId: string;

  @Column()
  comunicacao: number;

  @Column()
  proatividade: number;

  @Column()
  inteligenciaEmocional: number;

  @Column()
  flexibilidade: number;

  @Column()
  criatividade: number;

  @Column()
  observacao: number;

  @Column({ nullable: true })
  comentario: string;
}
