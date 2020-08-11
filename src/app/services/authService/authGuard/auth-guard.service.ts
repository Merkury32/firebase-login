import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, CanActivate } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(a): boolean {
    console.log(a);
    if (!a) {
      console.log('true');
      a = true;
      return true;
    }
    console.log('false');
    this.router.navigate(['edit']);
    return false;
  }
}
