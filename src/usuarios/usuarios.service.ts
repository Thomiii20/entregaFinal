import { Injectable , NotFoundException} from '@nestjs/common';

export interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable()
export class UsuariosService {
    private users: User[] = [];
     lista;

    constructor () {
        this.lista = []
        var usuario = {
            "id": 123,
            "nombre": "Thomas"
        }
        this.lista.push(usuario);

    }
    getAllUsers(): User[] {
        return this.users;
      }

      
      getUserById(id: number): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
          throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return user;
      }

    
    createUser(name: string, email: string): User {
          const newUser: User = {
              id: this.users.length + 1, // Generar ID simple
              name,
              email,
            };
            this.users.push(newUser);
            return newUser;
        }
    

        updateUser(id: number, name?: string, email?: string): User {
            const user = this.getUserById(id);
            if (name) user.name = name;
            if (email) user.email = email;
            return user;
          }

          deleteUser(id: number): { message: string } {
            const index = this.users.findIndex(user => user.id === id);
            if (index === -1) {
              throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
            }
            this.users.splice(index, 1);
            return { message: `Usuario con ID ${id} eliminado` };
          }

}
