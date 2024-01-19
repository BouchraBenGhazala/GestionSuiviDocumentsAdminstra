import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';
import { HttpClient } from '@angular/common/http';
interface Demande {
  id: number;
  etat: string;
  type_document: string;
  description: string;
  niveau: string;
  filiere: string;
  annee: any;
  etudiant_id: number;
}

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  demandes: any = [];
  selectedState: string = '';
  selectedDemande: Demande | null;
  displayDetails: boolean = false;
  currentEtudiant: any = [];
  infosType : any = [];

  constructor(private demandesData: DemandesData,private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllDemandes();
    console.log(this.selectedState);
  }

  validerDemande(demande: any): void {
    console.log('Fonction validerDemande appelée', demande);

    if (demande.etat === 'En Cours') {
      demande.etat = 'Traitee';

      // Faites appel à votre API pour mettre à jour la base de données
      this.http.post(`http://127.0.0.1:8000/api/demande/update-etat/${demande.id}`, { nouvelEtat: 'Traitee' })
        .subscribe(response => {
          console.log('État de la demande mis à jour dans la base de données', response);
        }, error => {
          console.error('Erreur lors de la mise à jour de l\'état de la demande', error);
          // Si la mise à jour échoue, vous voudrez probablement annuler la modification côté client
          demande.etat = 'En Cours';
        });
    }
  }
  
  getAllDemandes() {
    this.demandesData.getAllData().subscribe(res => {
      console.log(res);
      this.demandes = res;
    })
  }

  onFilterChange() {
    this.selectedState === 'all' ? this.getAllDemandes() : this.demandesData.getFiltredData(this.selectedState).subscribe(res => {
      this.demandes = res;
    })
  }

  async handleClickRow(demande: Demande) {
    console.log("click" + demande);

    if (this.selectedDemande === demande) {
      // Si la demande sélectionnée est déjà celle qui est cliquée, alors on la cache
      this.selectedDemande = null;
      this.displayDetails = false;
    } else {

      //get concern student
      let idEtudiant = this.demandes.find((d: Demande) => d.id === demande.id).etudiant_id;
      console.log(idEtudiant);
      let result: any = await this.demandesData.getEtudiant(idEtudiant);
      this.currentEtudiant = result[0];

      //get infos type of demandes

      let typeDemandes = demande.type_document.replace("De", "").replace(/\s/g, "");
      console.log(typeDemandes);
      this.infosType =  this.demandesData.getInfosTypeDemande(typeDemandes, demande.id);

      // state of dispaly
      this.selectedDemande = demande;
      this.displayDetails = true;
    }

  }

  // private capitalizeWords(input: string): string {
  //   return input.replace(/\b\w/g, (char) => char.toUpperCase());
  // }

}
