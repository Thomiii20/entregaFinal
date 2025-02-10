import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController],
  providers: [AppService, UsuariosService],
})
export class AppModule {}
