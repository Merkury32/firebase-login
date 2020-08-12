import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from 'src/app/models/user-login.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import firebase from '@firebase/app';
import '@firebase/auth';

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

  async onLogout() {
    try {
      await firebase.auth().signOut();
      this.router.navigate(['./']);
    } catch (e) {
      console.log(e);
    }
  }
}
