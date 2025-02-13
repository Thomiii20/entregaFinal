import { Module } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesController } from './canciones.controller';

@Module({
  providers: [CancionesService],
  controllers: [CancionesController]
})
export class CancionesModule {}
