import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import {AdminDashboardComponent} from "./component/admin-dashboard/admin-dashboard.component";
import {RouterConstants} from "./share/router-constants";
import {AddNewPostComponent} from "./component/add-new-post/add-new-post.component";

const routes: Routes = [
  {
    path: RouterConstants.LOGIN,
    component: LoginComponent,
    title: 'Login - M Pick Studio',
  }, {
    path: RouterConstants.ADMIN,
    component: AdminDashboardComponent,
    title: 'Dashboard - M Pick Studio',
  }, {
    path: RouterConstants.POST_NEW,
    component: AddNewPostComponent,
    title: 'New Post - M Pick Studio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
