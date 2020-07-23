import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  fetchUsers(){
    return of([
      new User({firstname: 'Jan', lastname: 'Kowalski', adress: 'Warszawa, miastowa 12a', phone: '+48754789345', id:'0'}),
      new User({firstname: 'Magdalena', lastname: 'Nowak', adress: 'Poznań, miastowa 14', phone: '+48458542905', id:'1'}),
      new User({firstname: 'Jan', lastname: 'Nowak', adress: 'Poznań, miastowa 14', phone: '+48485735274', id:'2'}),
      new User({firstname: 'Adam', lastname: 'Kołodziej', adress: 'Warszawa, targowa 5', phone: '+48456439563', id:'3'}),
    ])
  }

  addUser(user: User) {
    console.log(`userService addUser: ${user}`);
    return of(user);
  }

  deleteUser(id) {
    console.log(`userService deleteUser with id: ${id}`);
    return of(id);
  }
}
