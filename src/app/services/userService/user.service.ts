import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
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
      let snapVal = snap.val();

      if (snapVal === null) {
        snapVal = [];
      }

      let usersArr = Object.keys(snapVal).map((id) => new User(snapVal[id]));

      for (let i = 0; i < usersArr.length; i++) {
        this.usersIds.push(usersArr[i].id);
      }

      result.next(usersArr);
    });

    return result.pipe(take(2));
  }

  addUser(user: User) {
    const postData: User = user;

    const database = firebase.database();

    let userId: number;

    if (this.usersIds.length === 0) {
      userId = 0;
    } else {
      userId = Math.max(...this.usersIds) + 1;
    }

    database.ref('users/' + userId).set({
      firstname: postData.firstname,
      lastname: postData.lastname,
      adress: postData.adress,
      phone: postData.phone,
      id: userId,
    });

    return of(postData);
  }

  deleteUser(userId: number) {
    const usersData = firebase.database().ref(`users/${userId}`);

    usersData.remove();

    return of(usersData);
  }
}
