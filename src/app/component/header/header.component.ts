import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RouterConstants} from "../../share/router-constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: any;
  isShow: any;
  isShowUserInfo: any;

  constructor(private router: Router) {
    this.userName = 'M Pick Studio'
    this.isShow = false;
    this.isShowUserInfo = false;
  }


  newPostClick() {
    this.isShow = false;
    this.router.navigate([RouterConstants.POST_NEW])
  }

  logoutClick() {
    this.isShow = false;
    this.router.navigate([RouterConstants.LOGIN])
  }
}
