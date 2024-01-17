import { NgModule } from '@angular/core';
import { FormEtudiantComponent } from './form-etudiant.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormEtudiantComponent,
    // ... autres déclarations
  ],
  exports: [
    FormEtudiantComponent // Assurez-vous d'exporter le composant
  ],
  imports: [
    ReactiveFormsModule,
    // ... autres modules
  ],
})
export class FormEtudiantModule { }
