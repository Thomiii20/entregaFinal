import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Get()
    getUsuarios(): string {
        return this.usuariosService.getUsuarios();
    }

    // Crear usuarios @Post


    // Modificar usuarios @Put

    // Eliminar usuarios @Delete
}
