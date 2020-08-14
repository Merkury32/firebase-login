import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import '@firebase/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // get allUsers(): User[] {
  //   if (localStorage.getItem('users') === null) {
  //     return [];
  //   } else if (localStorage.length > 0) {
  //     let usersArr = JSON.parse(localStorage.getItem('users'));
  //     let mapUser = usersArr.map((user) => new User(user));
  //     return mapUser;
  //   }
  // }

  // set allUsers(users: User[]) {
  //   localStorage.setItem('users', JSON.stringify(users));
  // }

  constructor(private http: HttpClient) {}

  fetchUsers() {
    let result = new Subject<User[]>();
    this.http
      .get('https://fir-login-1416c.firebaseio.com/users.json')
      .subscribe((users) => {
        let usersAr = Object.keys(users).map((id) => new User(users[id]));
        result.next(usersAr);
      });

    return result.pipe(take(1));
  }

  addUser(user: User) {
    let postData: User = user;

    this.http
      .post<{ name: string }>(
        'https://fir-login-1416c.firebaseio.com/users.json',
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData.body.name);
        },
        (error) => {
          console.log(error);
        }
      );
    this.fetchUsers();
  }

  deleteUser() {
    this.http
      .delete('https://fir-login-1416c.firebaseio.com/users.json', {
        observe: 'response',
      })
      .subscribe(
        (responseData) => {
          console.log(responseData.body);
        },
        (error) => {
          console.log(error);
        }
      );
    this.fetchUsers();
  }
}
