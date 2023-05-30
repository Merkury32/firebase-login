import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User[];
  invalidAuthMessage: string | null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    console.log(`Login with email: ${email} and password: ${password}`);

    this.authService.onLogin(email, password).subscribe((res: any) => {
      if (res) {
        this.invalidAuthMessage = res.message;
      }
    });
  }
}
