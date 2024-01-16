import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SignupcomponentComponent } from './components/signup/signupcomponent/signupcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { BouchraService } from './services/bouchra.service';
import { ReactiveFormsModule } from '@angular/forms';
import {FormEtudiantComponent} from './form-etudiant/form-etudiant.component';
import { FormulaireAttestationBourseComponent } from './formulaire-attestation-bourse/formulaire-attestation-bourse.component';
import { FormulaireCertificatScolariteComponent } from './formulaire-certificat-scolarite/formulaire-certificat-scolarite.component';
import { FormulaireConventionStageComponent } from './formulaire-convention-stage/formulaire-convention-stage.component';
import { FormulaireReleveNotesComponent } from './formulaire-releve-notes/formulaire-releve-notes.component';
import { FormulaireTerrainSportComponent } from './formulaire-terrain-sport/formulaire-terrain-sport.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SignupcomponentComponent,
    FormEtudiantComponent,
    FormulaireAttestationBourseComponent,
    FormulaireCertificatScolariteComponent,
    FormulaireConventionStageComponent,
    FormulaireReleveNotesComponent,
    FormulaireTerrainSportComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BouchraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
