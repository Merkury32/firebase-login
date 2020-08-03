import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.scss']
})
export class AddUserPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.t = q => document.querySelector(q).classList.toggle('hide');
  }

}
