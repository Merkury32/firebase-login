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
  isWrongData: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    console.log(`Login with email: ${email} and password: ${password}`);

    this.authService.onLogin(email, password);

    // authObs.subscribe(
    //   (resData) => {
    //     this.isWrongData = false;
    //     console.log(resData);
    //     this.router.navigate(['edit']);
    //     !!this.isWrongData;
    //   },
    //   (errorMessage) => {
    //     this.isWrongData = true;
    //     console.log(errorMessage);
    //   }
    // );
  }
}
