import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AddUserPopupComponent } from './add-user-popup/add-user-popup.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent implements OnInit {
  users: User[];

  @ViewChild(AddUserPopupComponent) userPopup: AddUserPopupComponent;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadTable();
  }

  reloadTable() {
    this.userService.fetchUsers().subscribe((users) => {
      this.users = users;
    });
  }

  toggle(className) {
    this.userPopup.toggle(className);
  }

  onAdd(form: NgForm) {
    const user = new User({
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      adress: form.value.adress,
      phone: form.value.phone,
      id: '4',
    });
    this.userService.addUser(user).subscribe((users) => {
      this.reloadTable();
    });
    form.reset();
  }

  onDelete(userID: number) {
    this.userService.deleteUser(userID).subscribe((users) => {
      this.reloadTable();
    });
  }

  onClear(form: NgForm) {
    form.reset();
  }

  onLogout() {
    this.authService.onLogout();
  }
}
