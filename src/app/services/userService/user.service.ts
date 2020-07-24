import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {}

  fetchUsers() {
    let newUser = JSON.parse(sessionStorage.getItem('users'));

    console.log('userService fetch users:');
    console.log(newUser);

    return of(newUser);
  }

  addUser(user: User) {

    let usersArr = JSON.parse(sessionStorage.getItem('users')) || [];

    user.id = Math.random();

    console.log('userService add user:');
    console.log(user);

    usersArr.push(user);
    sessionStorage.setItem('users', JSON.stringify(usersArr));
    return of(this.fetchUsers());
  }

  deleteUser(id) {
    console.log(`userService deleteUser with id: ${id}`);

    let deletedUser = JSON.parse(sessionStorage.getItem('users')) || [];
    deletedUser.splice(id, 1);
    sessionStorage.setItem('users', JSON.stringify(deletedUser));
    return of(deletedUser);
  }
}
