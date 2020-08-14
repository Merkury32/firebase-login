import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import '@firebase/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private fireAuth: AngularFireAuth
  ) {}

  onLogin(email: string, password: string) {
    // return this.http.post<UserLogin>(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
    //     environment.firebaseConfig.apiKey,
    //   {
    //     email: email,
    //     password: password,
    //     returnSecureToken: true,
    //   }
    // );
    firebase.auth().signInWithEmailAndPassword(email, password);
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
