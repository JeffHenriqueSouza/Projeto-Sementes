import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CriarAvaliacaoDto {
  @IsNotEmpty()
  usuarioAvaliadoId: string;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(4, { each: true })
  comunicacao: number;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(4, { each: true })
  proatividade: number;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(4, { each: true })
  inteligenciaEmocional: number;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(4, { each: true })
  flexibilidade: number;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(4, { each: true })
  criatividade: number;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(4, { each: true })
  observacao: number;

  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  @Max(4, { each: true })
  respeito: number;

  @IsNotEmpty()
  comentario: string;
}
