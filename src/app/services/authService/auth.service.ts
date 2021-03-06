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
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['edit']);
        console.log('Succes');
      })
      .catch((error) => {
        console.log(error);
      });
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
