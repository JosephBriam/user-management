// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']

})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.users$.subscribe((users) => (this.users = users));
  }
}
