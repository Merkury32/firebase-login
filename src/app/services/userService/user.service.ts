import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  get allUsers(): User[] {
    let usersArr = JSON.parse(sessionStorage.getItem('users'));
    let mapUser = usersArr.map(user => new User(user));
    return mapUser;
  }

  constructor() {}

  fetchUsers() {
    let usersArr = this.allUsers;

    console.log('userService fetch users:', {usersArr});

    return of(usersArr);
  }

  addUser(user: User) {

    let usersArr = this.allUsers;

    user.id = Math.random();

    console.log('userService add user:', {user});

    usersArr.push(user);
    sessionStorage.setItem('users', JSON.stringify(usersArr));

    return of(user);
  }

  deleteUser(id) {
    console.log(`userService deleteUser with id: ${id}`);

    let deletedUser = this.allUsers;

    deletedUser.splice(id, 1);
    sessionStorage.setItem('users', JSON.stringify(deletedUser));

    return of(deletedUser);
  }
}
