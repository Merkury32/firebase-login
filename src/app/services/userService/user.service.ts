import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';

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
    // let usersArr = this.allUsers;

    // return of(usersArr);
    let usersAr: User[] = [];
    this.http
      .get('https://fir-login-1416c.firebaseio.com/users.json')
      .subscribe((users) => {
        let usersArr = Object.keys(users).map(function (id) {
          let user = users[id];
          return user;
        });
        let arrMap = usersArr.map((user) => new User(user));
        for (let i = 0; i < arrMap.length; i++) {
          usersAr.push(arrMap[i]);
        }
      });
    console.log(usersAr);
    return of(usersAr);
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
