import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersArr = [];

  constructor() {}

  fetchUsers(){
    let newUser = JSON.parse(sessionStorage.getItem('users'));
    console.log(`fetchUsers ${newUser}`)
    return of(newUser);
  }

  addUser(user: User) {
    console.log(`userService addUser: ${user}`);
    this.usersArr.push(user);
    sessionStorage.setItem('users', JSON.stringify(this.usersArr))
    return of(this.fetchUsers());
  }

  deleteUser(id) {
    console.log(`userService deleteUser with id: ${id}`);
    sessionStorage.removeItem('users')
    return of();
  }
}
