import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from "@angular/router";
import {RouterConstants} from "../../share/router-constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  constructor(private title: Title, private router: Router){
    this.title.setTitle('Login - M Pick Studio');
  }

  submitForm() {
    this.router.navigate([RouterConstants.ADMIN])
  }
}
