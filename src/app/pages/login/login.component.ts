import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth.service'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.onLogin().subscribe(users => {
      this.users = users;
      console.log(users);
    })
    this.router.navigate(['/edit']);
  }
}
