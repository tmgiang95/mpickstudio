import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {RouterConstants} from "./share/router-constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mpickstudio';
  showHead: boolean = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] === '/'+RouterConstants.LOGIN) {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });
  }
}
