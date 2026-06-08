import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { MesasModule } from '../mesas/mesas.module';
import { PedidosModule } from '../pedidos/pedidos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket]), MesasModule, PedidosModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
