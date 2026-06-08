import { IsEnum, IsNotEmpty } from 'class-validator';
import { EstadoComanda } from '../entities/comanda.entity';

export class UpdateComandaEstadoDto {
  @IsEnum(EstadoComanda)
  @IsNotEmpty()
  estado: EstadoComanda;
}
