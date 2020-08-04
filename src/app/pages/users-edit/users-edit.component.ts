import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AddUserPopupComponent } from './add-user-popup/add-user-popup.component';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent implements OnInit {
  users: User[];

  @ViewChild(AddUserPopupComponent) userPopup: AddUserPopupComponent;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.reloadTable();
  }

  reloadTable() {
    this.userService.fetchUsers().subscribe((user) => {
      this.users = user;
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
    // this.userService.addUser(user).subscribe(users => {
    //   this.reloadTable();
    // })
    // form.reset();
    // this.userService.addUser(user).subscribe((users) => {
    //   this.users = users;
    // });

    this.userService.addUser(user);
    this.reloadTable();
  }

  onDelete(userID: number) {
    this.userService.deleteUser(userID).subscribe((users) => {
      this.reloadTable();
    });
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
