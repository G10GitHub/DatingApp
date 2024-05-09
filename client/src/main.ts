import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavComponent } from './app/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  @NgModule({
    
    imports:[
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      CommonModule,
      FormsModule,
      BsDropdownModule.forRoot()
    ],
    providers : [],
    bootstrap : []
  })
  export class main{}

  // bootstrapApplication(AppComponent, appConfig{
  //   providers: [
  //     provideHttpClient(withFetch())
  //     //importProvidersFrom(CommonModule)
  //   ],
  // });