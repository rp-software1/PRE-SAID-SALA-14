import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ComandasService } from './comandas.service';
import { CreateComandaDto } from './dto/create-comanda.dto';
import { UpdateComandaEstadoDto } from './dto/update-comanda.dto';

@Controller('comandas')
export class ComandasController {
  constructor(private readonly comandasService: ComandasService) {}

  @Post()
  crear(@Body() createComandaDto: CreateComandaDto) {
    return this.comandasService.crear(createComandaDto);
  }

  @Get()
  encontrarTodas() {
    return this.comandasService.encontrarTodas();
  }

  @Get(':id')
  encontrarUna(@Param('id', ParseIntPipe) id: number) {
    return this.comandasService.encontrarUna(id);
  }

  @Patch(':id/estado')
  cambiarEstado(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateComandaEstadoDto: UpdateComandaEstadoDto,
  ) {
    return this.comandasService.cambiarEstado(id, updateComandaEstadoDto);
  }
}
