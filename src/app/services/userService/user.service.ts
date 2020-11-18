import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Subject, of } from 'rxjs';
=======
import { Subject } from 'rxjs';
>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
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
<<<<<<< HEAD

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

=======

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

    return result.pipe(take(1));
  }

  addUser(user: User) {
    const postData: User = user;
    const database = firebase.database();

    let userId: number;

>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
    if (this.usersIds.length === 0) {
      userId = 0;
    } else {
      userId = Math.max(...this.usersIds) + 1;
    }

<<<<<<< HEAD
=======
    console.log('Added user id is:', userId);

>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
    database.ref('users/' + userId).set({
      firstname: postData.firstname,
      lastname: postData.lastname,
      adress: postData.adress,
      phone: postData.phone,
      id: userId,
    });

<<<<<<< HEAD
    return of(postData);
  }

  deleteUser(userId: number) {
    const usersData = firebase.database().ref(`users/${userId}`);

    usersData.remove();

    return of(usersData);
=======
    this.fetchUsers();
  }

  deleteUser(userId) {
    console.log('Delete user with id:', userId);

    const usersData = firebase.database().ref(`users/${userId}`);

    usersData.remove();
>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
  }
}
