import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SignupcomponentComponent } from './components/signup/signupcomponent/signupcomponent.component';
import { BeforeLoginService } from './services/before-login.service';
import { CanActivate } from '@angular/router';
import { AfterLoginService } from './services/after-login.service';
import { Profile2Component } from './components/profile2/profile2.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';

const appRoutes: Routes = [
  {
    path:'form',
    component: FormEtudiantComponent,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'etudiant' }, 

  },
  {
<<<<<<< HEAD
    path:'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService],
=======
    path:'form',
    component: FormEtudiantComponent,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'etudiant' }, 
>>>>>>> 7eb6c312621eea66c8ee729d6d75320385b405ae

  },
  {
    path:'profile2',
    component: Profile2Component,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'admin' }, 
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'etudiant' },  
  },
  {
    path:'administrateur',
    component: AdministrateurComponent,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'admin' },  
  },
  {
    path:'etudiant',
    component: EtudiantComponent,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'etudiant' },  
  },
  // {
  //   path:'**',
  //   redirectTo:'login',
  //   pathMatch:'full'
  // },
  {
    path:'signup',
    component: SignupcomponentComponent,
    canActivate: [AfterLoginService]
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
    component: DashboardComponent,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'admin' }, 
  },
  {
    path: 'dashboard2',
    component: Dashboard2Component,
    canActivate: [AfterLoginService,AuthGuardService],
    data: { expectedRole: 'etudiant' }, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
