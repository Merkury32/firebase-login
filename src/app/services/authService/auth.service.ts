import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

<<<<<<< HEAD
import '@firebase/auth';
=======
>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
<<<<<<< HEAD
  constructor(
    private http: HttpClient,
    private router: Router,
    private fireAuth: AngularFireAuth
  ) {}
=======
  constructor(private router: Router, private fireAuth: AngularFireAuth) {}
>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8

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
<<<<<<< HEAD
    } catch (e) {
      console.log(e);
=======
    } catch (error) {
      console.log(error);
>>>>>>> 3f34bd7f7ec690fe7f9a6af3f8def7d0d89cdde8
    }
  }
}
