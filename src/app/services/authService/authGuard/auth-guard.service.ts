import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, CanActivate } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private loginComponent: LoginComponent) {}

  canActivate(): boolean {
    console.log(this.loginComponent.isWrongData);
    if (!this.loginComponent.isWrongData) {
      console.log('true');
      return true;
    }
    console.log('false');
    return false;
  }
}
