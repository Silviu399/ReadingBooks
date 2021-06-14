import { DummyComponent } from './dummy/dummy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'myActivity', component: DashboardComponent },
  { path: 'browseBooks', component: DummyComponent },
  { path: 'categories', component: DummyComponent },
  { path: 'statistics', component: DummyComponent },
  { path: 'feedback', component: DummyComponent },
  { path: 'authentication', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
