import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {}

  fetchUsers() {
    let newUser = JSON.parse(sessionStorage.getItem('users'));

    let mapUser = newUser.map(user => new User(user));

    console.log('userService fetch users:', {mapUser});

    return of(mapUser);
  }

  addUser(user: User) {

    let usersArr = JSON.parse(sessionStorage.getItem('users')) || [];

    user.id = Math.random();

    console.log('userService add user:', {user});

    usersArr.push(user);
    sessionStorage.setItem('users', JSON.stringify(usersArr));
    return of(user);
  }

  deleteUser(id) {
    console.log(`userService deleteUser with id: ${id}`);

    let deletedUser = JSON.parse(sessionStorage.getItem('users')) || [];
    deletedUser.splice(id, 1);
    sessionStorage.setItem('users', JSON.stringify(deletedUser));
    return of(deletedUser);
  }
}
