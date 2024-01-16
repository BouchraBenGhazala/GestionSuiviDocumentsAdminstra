import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../document.service'; // Assurez-vous d'ajuster le chemin

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.scss']
})
export class FormEtudiantComponent implements OnInit {

  documentForm: FormGroup;

  niveaux = ['API1', 'API2', 'CI1', 'CI2', 'CI3'];
  filieres = ['rien', 'IAGI', 'GE', 'GM', 'GI'];
  typesDocuments = ['Certificat de Scolarité', 'Convention de Stage', 'Demande de Relevé de Note', 'Lettre de Recommandation de Stage'];

  constructor(private fb: FormBuilder, private documentService: DocumentService) { }

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
      const formData = this.documentForm.value;

      // Utilisez le service pour envoyer le formulaire au backend
      this.documentService.saveDocument(formData).subscribe(
        (response) => {
          // Gérer la réponse réussie
          console.log('Enregistrement réussi :', response);
          
          // Réinitialiser le formulaire après soumission
          this.documentForm.reset();
        },
        (error) => {
          // Gérer les erreurs
          console.error('Erreur lors de l\'enregistrement :', error);
        }
      );
    }
  }
}
