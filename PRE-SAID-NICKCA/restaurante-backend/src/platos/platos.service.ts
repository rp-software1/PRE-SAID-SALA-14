import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';
import { Plato } from './entities/plato.entity';

@Injectable()
export class PlatosService {
  private platos: Plato[] = [];
  private idCounter = 1;

  create(createPlatoDto: CreatePlatoDto) {
    const newPlato: Plato = {
      id: this.idCounter++,
      ...createPlatoDto,
    };
    this.platos.push(newPlato);
    return newPlato;
  }

  findAll() {
    return this.platos;
  }

  findOne(id: number) {
    const plato = this.platos.find((p) => p.id === id);
    if (!plato) {
      throw new NotFoundException(`Plato con ID ${id} no encontrado`);
    }
    return plato;
  }

  update(id: number, updatePlatoDto: UpdatePlatoDto) {
    const plato = this.findOne(id);
    const index = this.platos.findIndex((p) => p.id === id);
    this.platos[index] = { ...plato, ...updatePlatoDto };
    return this.platos[index];
  }

  remove(id: number) {
    this.findOne(id);
    this.platos = this.platos.filter((p) => p.id !== id);
    return { deleted: true };
  }
}
