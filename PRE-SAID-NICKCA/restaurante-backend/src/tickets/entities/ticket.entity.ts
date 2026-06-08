import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Mesa } from '../../mesas/entities/mesa.entity';

export enum EstadoTicket {
  ABIERTO = 'abierto',
  PAGADO = 'pagado',
}

export enum MetodoPago {
  EFECTIVO = 'efectivo',
  TARJETA = 'tarjeta',
}

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Mesa, { eager: true })
  mesa: Mesa;

  @Column({ name: 'mesa_id' })
  mesaId: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  total: number;

  @Column({ type: 'text', nullable: true })
  metodoPago: MetodoPago;

  @Column({ type: 'text', default: EstadoTicket.ABIERTO })
  estado: EstadoTicket;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
