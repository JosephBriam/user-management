// user-form.component.ts
import { Component } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css' ],
})
export class UserFormComponent {
  newUser: User = { id: 0, name: '', email: '', phone: '', address: '', dateOfBirth: '', occupation: '' };

  constructor(private userService: UserService, private router: Router) {}

  addUser() {
    this.userService.addUser(this.newUser);
    this.router.navigate(['/users']);
  }
}
