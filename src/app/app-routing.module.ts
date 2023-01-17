import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/account/signin/signin.component';
import { LoginComponent } from 'src/account/login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
