import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_service/account.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,CommonModule, NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  model: any = {}
  loggedIn = false;
  constructor( private accountService: AccountService) {}

  ngOnInit(): void {

  }
login() {
  this.accountService.login(this.model).subscribe({
    next: response => {
      console.log(response);
      this.loggedIn = true;
    },
    error: error => console.error(error)
    
  })
  console.log(this.model);
}

logout()
{
  this.loggedIn = false;
}


}
