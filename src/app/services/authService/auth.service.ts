import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from 'src/app/models/user-login.model';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  onLogin(email: string, password: string) {
    return this.http.post<UserLogin>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        environment.firebase.apiKey,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
