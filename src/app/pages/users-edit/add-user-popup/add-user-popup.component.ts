import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.scss']
})
export class AddUserPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle(className) {
    document.querySelector(className).classList.toggle('hide');
  }
}
