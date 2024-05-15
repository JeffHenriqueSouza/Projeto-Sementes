// feedback.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string; // ID do usuário associado ao feedback

  @Column()
  message: string; // Mensagem de feedback
}
