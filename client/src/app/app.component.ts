import { Component, OnInit, Input, Output } from '@angular/core';
import { AccountService } from './_service/account.service';
import { User } from './_models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  title = 'Dating app';
  /**
   *
   */
  constructor(private accountService: AccountService) {}
  
  ngOnInit(): void {
    this.setCurrentUser();
  }

  
  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user : User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
