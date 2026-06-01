import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatosModule } from './platos/platos.module';
import { Plato } from './platos/entities/plato.entity';
import { MesasModule } from './mesas/mesas.module';
import { Mesa } from './mesas/entities/mesa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'db.sqlite',
      entities: [Plato, Mesa],
      synchronize: true,
    }),
    PlatosModule,
    MesasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
