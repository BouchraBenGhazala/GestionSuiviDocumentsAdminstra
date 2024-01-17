import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.scss']
})
export class FormEtudiantComponent implements OnInit {

  documentForm:FormGroup;

  niveaux = ['API1', 'API2', 'CI1', 'CI2', 'CI3'];
  filieres = ['rien', 'IAGI', 'GE', 'GM', 'GI'];
  typesDocuments = ['Certificat de Scolarité', 'Convention de Stage', 'Demande de Relevé de Note', 'Lettre de Recommandation de Stage'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.documentForm = this.fb.group({
      niveau: ['', Validators.required],
      filiere: ['', Validators.required],
      typeDocument: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.documentForm.valid) {
      // Envoyer le formulaire au backend ici
      console.log(this.documentForm.value);
      // Réinitialiser le formulaire après soumission
      this.documentForm.reset();
    }
  }
}
