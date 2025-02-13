import { Injectable , NotFoundException} from '@nestjs/common';
export interface Cancion {
    id: number;
    nombre: string;
    artista: string;
  }

@Injectable()
export class CancionesService {
 private canciones: Cancion[] = [];

  getAllCanciones(): Cancion[] {
    return this.canciones;
  }

  getCancionByNombre(nombre: string): Cancion {
    const cancion = this.canciones.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
    if (!cancion) {
      throw new NotFoundException(`Canción con nombre "${nombre}" no encontrada`);
    }
    return cancion;
  }

  getCancionesByArtista(artista: string): Cancion[] {
    const canciones = this.canciones.filter(c => c.artista.toLowerCase() === artista.toLowerCase());
    if (canciones.length === 0) {
      throw new NotFoundException(`No se encontraron canciones del artista "${artista}"`);
    }
    return canciones;
  }

  addCancion(nombre: string, artista: string): Cancion {
    const nuevaCancion: Cancion = {
      id: this.canciones.length > 0 ? this.canciones[this.canciones.length - 1].id + 1 : 1,
      nombre,
      artista,

    };
    this.canciones.push(nuevaCancion);
    return nuevaCancion;
  }

  updateCancion(id: number, nombre?: string, artista?: string, album?: string, año?: number): Cancion {
    const cancion = this.canciones.find(c => c.id === id);
    if (!cancion) {
      throw new NotFoundException(`Canción con ID ${id} no encontrada`);
    }
    if (nombre) cancion.nombre = nombre;
    if (artista) cancion.artista = artista;
    return cancion;
  }

  deleteCancion(id: number): { message: string } {
    const index = this.canciones.findIndex(c => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Canción con ID ${id} no encontrada`);
    }
    this.canciones.splice(index, 1);
    return { message: `Canción con ID ${id} eliminada` };
  }
}
