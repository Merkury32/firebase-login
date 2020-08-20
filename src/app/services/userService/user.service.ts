import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  usersIds = [];

  fetchUsers() {
    let result = new Subject<User[]>();

    const usersData = firebase.database().ref('users');

    usersData.on('value', (snap) => {
      const snapVal = snap.val();
      let usersArr = Object.keys(snapVal).map((id) => new User(snapVal[id]));
      for (let i = 0; i < usersArr.length; i++) {
        this.usersIds.push(usersArr[i].id);
      }
      result.next(usersArr);
    });
    console.log(Math.max(...this.usersIds));

    return result.pipe(take(1));
  }

  addUser(user: User) {
    const postData: User = user;
    const database = firebase.database();

    console.log('Added user id is:', 2);

    database.ref('users/' + 2).set({
      firstname: postData.firstname,
      lastname: postData.lastname,
      adress: postData.adress,
      phone: postData.phone,
      id: 2,
    });

    this.fetchUsers();
  }

  deleteUser() {
    // Later
  }
}
