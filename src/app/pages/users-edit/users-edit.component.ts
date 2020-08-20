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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.reloadTable();
  }

  reloadTable() {
    //this.userService.fetchUsers();
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
      id: '0',
    });

    form.reset();

    this.userService.addUser(user);
    this.reloadTable();
  }

  onDelete(userID: number) {
    this.userService.deleteUser();
  }

  onClear(form: NgForm) {
    form.reset();
  }

  onLogout() {
    this.authService.onLogout();
  }
}
