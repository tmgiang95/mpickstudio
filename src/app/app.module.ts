import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { AddNewPostComponent } from './component/add-new-post/add-new-post.component';
import { QuillModule } from 'ngx-quill'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    AddNewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
