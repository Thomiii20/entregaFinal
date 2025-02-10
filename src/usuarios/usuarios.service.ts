import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
     lista;

    constructor () {
        this.lista = []
        var usuario = {
            "id": 123,
            "nombre": "Thomas"
        }
        this.lista.push(usuario);

    }
    getUsuarios(): string {
        return this.lista
    }

    crearUsuario(): string {
        return "usuario creado"
    }

    modificarUsuario(): string {
        return "usuario modificado"
    }

    eliminarUsuario(): string {
        return "usuario eliminado"
    }

}
