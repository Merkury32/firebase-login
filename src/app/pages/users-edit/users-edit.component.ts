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
  isClosed = true;

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.userService.fetchUsers().subscribe(users => {
      this.users = users;
    })
  }

  onAdd(form: NgForm) {
    this.isClosed = !this.isClosed;
    const user = new User({firstname: form.value.firstname, lastname: form.value.lastname, adress: form.value.adress, phone: form.value.phone, id: '5'})
    this.userService.addUser(user).subscribe(users => {
      this.users.push(user)
    })
  }

  onDelete(id: number) {

  }

  onClose() {
    this.isClosed = !this.isClosed;
  }

}
