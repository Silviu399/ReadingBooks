import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CategoriesViewComponent } from './dashboard/components/categories-view/categories-view.component';

import {LoggedInGuard} from 'ngx-auth-firebaseui';
import { ReportsComponent } from './reports/reports.component';
const routes: Routes = [
  { path: 'biblioteca', component: DashboardComponent, canActivate: [LoggedInGuard]},
  { path: 'progres', component: CategoriesViewComponent, canActivate: [LoggedInGuard]},
  { path: 'rapoarte', component: ReportsComponent, canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
