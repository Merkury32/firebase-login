import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get allUsers(): User[] {
    if (sessionStorage.getItem('users') === null) {
      return [];
    } else if (sessionStorage.length > 0) {
      let usersArr = JSON.parse(sessionStorage.getItem('users'));
      let mapUser = usersArr.map(user => new User(user));
      return mapUser;
    }
  }

  set allUsers(users: User[]) {
    sessionStorage.setItem('users', JSON.stringify(users));
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

    this.allUsers = usersArr;

    return of(user);
  }

  deleteUser(id) {
    console.log(`userService deleteUser with id: ${id}`);

    let deletedUser = this.allUsers;

    deletedUser.splice(id, 1);

    this.allUsers = deletedUser;

    return of(deletedUser);
  }
}
