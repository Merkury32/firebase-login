import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import '@firebase/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  onLogin(email: string, password: string) {
    const result = new Observable((observer) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['edit']);
          observer.next(null);
        })
        .catch((error) => {
          observer.next(error);
        });
    });

    return result;
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
