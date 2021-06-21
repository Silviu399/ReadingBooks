import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CategoriesViewComponent } from './dashboard/components/categories-view/categories-view.component';

import {LoggedInGuard} from 'ngx-auth-firebaseui';
const routes: Routes = [
  { path: 'carti', component: DashboardComponent, canActivate: [LoggedInGuard]},
  { path: 'progres', component: CategoriesViewComponent, canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
