mport { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Add this line

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [AppComponent, UserRegistrationComponent],
  imports: [BrowserModule, ReactiveFormsModule], // Add ReactiveFormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}