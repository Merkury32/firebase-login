import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers() {
    let result = new Subject<User[]>();
    // this.http
    //   .get('https://fir-login-1416c.firebaseio.com/users.json')
    //   .subscribe((users) => {
    //     let usersAr = Object.keys(users).map((id) => new User(users[id]));
    //     result.next(usersAr);
    //   });

    // return result.pipe(take(1));
    firebase.initializeApp(environment.firebaseConfig);
    let dbRefObject = firebase
      .database()
      .ref('users')
      .on('value', (snap) => {
        console.log(snap);
      });
  }

  addUser(user: User) {
    let postData: User = user;
    let database = firebase.database();

    database.ref('users/' + '2').set({
      firstname: postData.firstname,
      lastname: postData.lastname,
      adress: postData.adress,
      phone: postData.phone,
    });

    // this.http
    //   .post<{ name: string }>(
    //     'https://fir-login-1416c.firebaseio.com/users.json',
    //     postData,
    //     {
    //       observe: 'response',
    //     }
    //   )
    //   .subscribe(
    //     (responseData) => {
    //       console.log(responseData.body.name);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // this.fetchUsers();
  }

  deleteUser() {
    // Later
  }
}
