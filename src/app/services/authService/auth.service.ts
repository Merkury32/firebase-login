import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserLogin } from 'src/app/models/user-login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  onLogin(email: string, password: string) {
    return this.http
      .post<UserLogin>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + environment.firebaseApiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
  }
}
