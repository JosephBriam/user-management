import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;         // Nuevo campo
  dateOfBirth?: string;     // Nuevo campo
  occupation?: string;      // Nuevo campo
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Usuarios iniciales, sin los campos adicionales por simplicidad
  private users = new BehaviorSubject<User[]>([
    { id: 1, name: 'Juan Pérez', email: 'juan@mail.com', phone: '123456789', address: 'Calle 1', dateOfBirth: '1990-01-01', occupation: 'Ingeniero' },
    { id: 2, name: 'Maria Gómez', email: 'maria@mail.com', phone: '987654321', address: 'Calle 2', dateOfBirth: '1985-05-15', occupation: 'Doctora' },
  ]);

  users$ = this.users.asObservable();

  // Método para obtener un usuario por ID
  getUserById(id: number): Observable<User | undefined> {
    return this.users$.pipe(
      map((users) => users.find((u) => u.id === id))
    );
  }

  // Método para agregar un nuevo usuario
  addUser(user: User) {
    const currentUsers = this.users.getValue(); // Obtener la lista actual de usuarios
    const newId = currentUsers.length > 0 ? Math.max(...currentUsers.map(u => u.id)) + 1 : 1; // Generar un nuevo ID único

    // Asignamos el nuevo ID y añadimos el usuario a la lista
    const newUser = { ...user, id: newId }; 
    this.users.next([...currentUsers, newUser]);
  }
}
