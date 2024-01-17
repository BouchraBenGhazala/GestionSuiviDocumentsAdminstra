import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SignupcomponentComponent } from './components/signup/signupcomponent/signupcomponent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormEtudiantComponent} from './form-etudiant/form-etudiant.component';
import { CommonModule } from '@angular/common';
const appRoutes: Routes = [
  {
    path:'login',
    component: LoginComponent,

  },
  {
    path:'form',
    component:FormEtudiantComponent,
  },
  // {
  //   path:'**',
  //   redirectTo:'login',
  //   pathMatch:'full'
  // },
  {
    path:'signup',
    component: SignupcomponentComponent,
  },
  {
    path:'profile',
    component: ProfileComponent,
  },
  {
    path:'request-password-reset',
    component: RequestResetComponent,
  },
  {
    path:'response-password-reset',
    component: ResponseResetComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
