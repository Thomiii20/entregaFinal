import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Get()
    getUsuarios() {
        return this.usuariosService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
    return this.usuariosService.getUserById(Number(id));
  }

    // Crear usuarios @Post
    @Post()
    createUser(@Body() body: { name: string; email: string }) {
    return this.usuariosService.createUser(body.name, body.email);
  }
    // Modificar usuarios @Put
    @Put(':id')
    updateUser(
      @Param('id') id: string,
      @Body() body: { name?: string; email?: string }
    ) {
      return this.usuariosService.updateUser(Number(id), body.name, body.email);
    }
    // Eliminar usuarios @Delete
    @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usuariosService.deleteUser(Number(id));
  }
}
