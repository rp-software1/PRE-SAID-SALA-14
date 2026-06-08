import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateComandaDto {
  @IsInt()
  @IsPositive()
  pedidoId: number;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
