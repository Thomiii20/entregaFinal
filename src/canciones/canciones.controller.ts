import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CancionesService, Cancion } from './canciones.service';

@Controller('canciones')
export class CancionesController {
    constructor(private readonly cancionesService: CancionesService) {}

  @Get()
  getAllCanciones(): Cancion[] {
    return this.cancionesService.getAllCanciones();
  }

  @Get('nombre/:nombre')
  getCancionByNombre(@Param('nombre') nombre: string): Cancion {
    return this.cancionesService.getCancionByNombre(nombre);
  }

  @Get('artista/:artista')
  getCancionesByArtista(@Param('artista') artista: string): Cancion[] {
    return this.cancionesService.getCancionesByArtista(artista);
  }

  @Post()
  addCancion(@Body() body: { nombre: string; artista: string}): Cancion {
    return this.cancionesService.addCancion(body.nombre, body.artista);
  }

  @Put(':id')
  updateCancion(
    @Param('id') id: string,
    @Body() body: { nombre?: string; artista?: string }
  ): Cancion {
    return this.cancionesService.updateCancion(Number(id), body.nombre, body.artista);
  }

  @Delete(':id')
  deleteCancion(@Param('id') id: string) {
    return this.cancionesService.deleteCancion(Number(id));
  }
}
