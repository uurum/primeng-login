import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {

    const user = localStorage.getItem('user');

    if(user) {
      const tmp = JSON.parse(user);
      if(tmp && tmp.username) {
        this.username = tmp.username;
      }
    }
  }

}
