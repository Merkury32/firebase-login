import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, max } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get allUsers(): User[] {
    if (localStorage.getItem('users') === null) {
      return [];
    } else if (localStorage.length > 0) {
      let usersArr = JSON.parse(localStorage.getItem('users'));
      let mapUser = usersArr.map((user) => new User(user));
      return mapUser;
    }
  }

  set allUsers(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  constructor() {}

  fetchUsers() {
    let usersArr = this.allUsers;

    return of(usersArr);
  }

  addUser(user: User) {
    let usersArr = this.allUsers;

    let mapIds = usersArr.map((ids) => ids.id);

    let maxId = Math.max(...mapIds);

    if (usersArr.length == 0) {
      user.id = 0;
    } else {
      user.id = maxId + 1;
    }

    usersArr.push(user);

    this.allUsers = usersArr;

    return of(user);
  }

  deleteUser(id) {
    let deletedUser = this.allUsers;

    deletedUser.splice(id, 1);

    this.allUsers = deletedUser;

    return of(deletedUser);
  }
}
