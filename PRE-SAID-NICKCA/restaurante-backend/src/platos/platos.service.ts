import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plato } from './entities/plato.entity';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';

@Injectable()
export class PlatosService {
  constructor(
    @InjectRepository(Plato)
    private readonly platoRepository: Repository<Plato>,
  ) {}

  async create(createPlatoDto: CreatePlatoDto): Promise<Plato> {
    const plato = this.platoRepository.create(createPlatoDto);
    return this.platoRepository.save(plato);
  }

  async findAll(): Promise<Plato[]> {
    return this.platoRepository.find({ order: { nombre: 'ASC' } });
  }

  async findOne(id: number): Promise<Plato> {
    const plato = await this.platoRepository.findOne({ where: { id } });
    if (!plato) {
      throw new NotFoundException(`Plato con ID ${id} no encontrado`);
    }
    return plato;
  }

  async update(id: number, updatePlatoDto: UpdatePlatoDto): Promise<Plato> {
    const plato = await this.findOne(id);
    Object.assign(plato, updatePlatoDto);
    return this.platoRepository.save(plato);
  }

  async remove(id: number): Promise<void> {
    const plato = await this.findOne(id);
    await this.platoRepository.remove(plato);
  }
}
