import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
//import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  // bootstrapApplication(AppComponent, appConfig{
  //   providers: [
  //     provideHttpClient(withFetch())
  //     //importProvidersFrom(CommonModule)
  //   ],
  // });