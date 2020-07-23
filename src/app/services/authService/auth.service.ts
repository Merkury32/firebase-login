import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onLogin() {
    return of([
      new User({firstname: 'Jan', lastname: 'Kowalski', adress: 'Łódź, rzeczna 15', phone: '+48654435675'})
    ])
  }
}
