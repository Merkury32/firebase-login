import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.reloadTable();
  }

  reloadTable() {
    this.userService.fetchUsers().subscribe(users => {
      this.users = users;
    })
  }

  toggle(className) {
    document.querySelector(className).classList.toggle('hide');
  }

  onAdd(form: NgForm) {
    const user = new User({firstname: form.value.firstname, lastname: form.value.lastname, adress: form.value.adress, phone: form.value.phone, id: '4'})
    this.userService.addUser(user).subscribe(users => {
      this.reloadTable();
    })
    form.reset();
  }

  onDelete(userID: number) {
    this.userService.deleteUser(userID).subscribe(users => {
      this.reloadTable();
    })
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
