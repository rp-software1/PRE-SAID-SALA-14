import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { EstadoMesa } from '../entities/mesa.entity';

export class CrearMesaDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  numero: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  capacidad: number;

  @IsOptional()
  @IsEnum(EstadoMesa)
  estado?: EstadoMesa;
}
