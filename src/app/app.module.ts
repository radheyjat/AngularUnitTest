import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// desing
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
