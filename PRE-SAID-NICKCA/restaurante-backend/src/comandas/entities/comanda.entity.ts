import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pedido } from '../../pedidos/entities/pedido.entity';

export enum EstadoComanda {
  RECIBIDA = 'recibida',
  EN_PREPARACION = 'en_preparacion',
  LISTA = 'lista',
}

@Entity('comandas')
export class Comanda {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, { eager: true })
  pedido: Pedido;

  @Column({ name: 'pedido_id' })
  pedidoId: number;

  @Column({ type: 'text', default: EstadoComanda.RECIBIDA })
  estado: EstadoComanda;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
