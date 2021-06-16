import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CategoriesViewComponent } from './dashboard/components/categories-view/categories-view.component';

const routes: Routes = [
  { path: 'carti', component: DashboardComponent },
  { path: 'progres', component: CategoriesViewComponent },
  { path: 'autentificare', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
