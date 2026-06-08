import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comanda } from './entities/comanda.entity';
import { CreateComandaDto } from './dto/create-comanda.dto';
import { UpdateComandaEstadoDto } from './dto/update-comanda.dto';
import { Pedido } from '../pedidos/entities/pedido.entity';

@Injectable()
export class ComandasService {
  constructor(
    @InjectRepository(Comanda)
    private readonly comandaRepository: Repository<Comanda>,
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  async crear(createComandaDto: CreateComandaDto): Promise<Comanda> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id: createComandaDto.pedidoId },
    });
    if (!pedido) {
      throw new BadRequestException(
        `El pedido con id ${createComandaDto.pedidoId} no existe`,
      );
    }

    const comanda = this.comandaRepository.create({
      pedido,
      observaciones: createComandaDto.observaciones,
    });

    return this.comandaRepository.save(comanda);
  }

  async encontrarTodas(): Promise<Comanda[]> {
    return this.comandaRepository.find({
      relations: { pedido: { mesa: true, platos: true } },
      order: { createdAt: 'DESC' },
    });
  }

  async encontrarUna(id: number): Promise<Comanda> {
    const comanda = await this.comandaRepository.findOne({
      where: { id },
      relations: { pedido: { mesa: true, platos: true } },
    });
    if (!comanda) {
      throw new NotFoundException(`Comanda con id ${id} no encontrada`);
    }
    return comanda;
  }

  async cambiarEstado(
    id: number,
    updateComandaEstadoDto: UpdateComandaEstadoDto,
  ): Promise<Comanda> {
    const comanda = await this.encontrarUna(id);
    comanda.estado = updateComandaEstadoDto.estado;
    return this.comandaRepository.save(comanda);
  }
}
