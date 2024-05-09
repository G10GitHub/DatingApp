import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


export const appConfig: ApplicationConfig = {
  
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
    BrowserAnimationsModule,BrowserModule,CommonModule]

};


