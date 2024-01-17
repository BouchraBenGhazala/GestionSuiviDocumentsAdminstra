import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';

interface Demande{
  id : number;
  etat : string;
  type_demande : string;
  description : string;
  niveau : string;
  filiere : string;
  annee : any;
  etudiant_id : number;
}

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  demandes : any = [];
  selectedState : string = '';
  selectedDemande : number | null = null;
  displayDetails : boolean = false;
  currentEtudiant: any = [];
  
  constructor(private demandesData : DemandesData){}

  ngOnInit(): void {
    this.getAllDemandes();
    console.log(this.selectedState);
  }

  getAllDemandes(){
    this.demandesData.getAllData().subscribe(res => {
      console.log(res);
      this.demandes = res;
    })
  }

  onFilterChange(){
    this.selectedState === 'all' ? this.getAllDemandes() : this.demandesData.getFiltredData(this.selectedState).subscribe(res => {
      this.demandes = res;
    })
  }

  async handleClickRow(idDemande: number){
    console.log("click" + idDemande);
    
    if (this.selectedDemande === idDemande) {
      // Si la demande sélectionnée est déjà celle qui est cliquée, alors on la cache
      this.selectedDemande = null;
      this.displayDetails = false;
    } else {
      let idEtudiant = this.demandes.find((d : Demande) => d.id === idDemande).etudiant_id;
      console.log(idEtudiant);
      let result : any =   await this.demandesData.getEtudiant(idEtudiant);
      this.currentEtudiant = result[0];
      console.log(this.currentEtudiant);
      this.selectedDemande = idDemande;
      this.displayDetails = true;
    }

  }

}
