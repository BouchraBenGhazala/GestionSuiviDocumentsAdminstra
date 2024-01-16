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
  typesDocuments = ['Relevé De Notes', 'Attestation De Bourse', 'Certificat De Scolarite', 'Convention De Stage','Terrain De Sport'];

  constructor(private fb: FormBuilder, private documentService: DocumentService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.documentForm = this.fb.group({
      niveau: ['', Validators.required],
      filiere: ['', Validators.required],
      type_document: ['', Validators.required],
      description: ['', Validators.required],
      annee: [''],
      lieu_de_naissance: [''],
      type_bourse: [''],
      date:['']
    });
  }
  /*
  isTypeDocumentSelected(): boolean {
    const typeDocumentControl = this.documentForm.get('type_document');
    if (typeDocumentControl && typeDocumentControl.valid) {
      return typeDocumentControl.value !== null;
    }
    return false;
  }*/
  getSelectedDocumentType(): string | null {
    const typeDocumentControl = this.documentForm.get('type_document');
    return typeDocumentControl?.value || null;
  }
  
  

  onSubmit(): void {
    if (this.documentForm.valid) {
      const formData = this.documentForm.value;

      // Utilisez le service pour envoyer le formulaire au backend
      this.documentService.saveDocument(formData).subscribe(
        (response) => {
          // Gérer la réponse réussie
          console.log('Enregistrement réussi :', response);
          console.log(formData);
          
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
