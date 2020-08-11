import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/user-login.model';
import { AuthGuardService } from 'src/app/services/authService/authGuard/auth-guard.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User[];
  isWrongData = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private authGuardService: AuthGuardService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    console.log(`Login with email: ${email} and password: ${password}`);

    let authObs: Observable<UserLogin>;

    authObs = this.authService.onLogin(email, password);

    authObs.subscribe(
      (resData) => {
        this.isWrongData = false;
        console.log(resData);
        this.authGuardService.canActivate(this.isWrongData);
        this.router.navigate(['edit']);
      },
      (errorMessage) => {
        this.isWrongData = true;
        console.log(errorMessage);
      }
    );
  }
}
