import { Component } from '@angular/core';
import { DemandesData } from '../../services/dashboard/demande-data.service';


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
  selector: 'app-en-cours',
  templateUrl: './en-cours.component.html',
  styleUrl: './en-cours.component.css'
})


export class EnCoursComponent {

  pendingData: any = [];
  selectedDemande: Demande | null;
  displayDetails: boolean = false;
  currentEtudiant: any = [];
  infosType: any = [];

  constructor(private demandesPending: DemandesData) { }

  ngOnInit(): void {
    this.getApproveddemandes();
  }

  getApproveddemandes() {
    this.demandesPending.getFiltredData("En Cours").subscribe(res => this.pendingData = res)
  }

  async handleClickRow(demande: Demande) {
    console.log("click" + demande);

    if (this.selectedDemande === demande) {
      // Si la demande sélectionnée est déjà celle qui est cliquée, alors on la cache
      this.selectedDemande = null;
      this.displayDetails = false;
    } else {

      //get concern student

      this.currentEtudiant = await this.getConcernEtudiant(demande.id);

      //get infos type of demandes

      this.infosType = await this.getInfosType(demande.type_document, demande.id);

      // state of dispaly
      this.selectedDemande = demande;
      this.displayDetails = true;
    }

  }

  private async getInfosType(type: string, id: number) {
    let typeDemandes = type.replace("De", "").replace(/\s/g, "");

    console.log(typeDemandes);

    const infosTypeNoformated = await this.demandesPending.getInfosTypeDemande(typeDemandes, id);

    const formattedInfos = infosTypeNoformated.map((item: any) => {

      const formattedItem: any = {};
      // Iterate over the keys of the current object
      Object.keys(item).forEach(key => {
        // Replace underscores with spaces and capitalize words
        const formattedKey = key.replace("_", " de ");
        formattedItem[this.capitalizeWords(formattedKey)] = item[key];
      });

      return formattedItem;
    });

    return formattedInfos;
  }

  private async getConcernEtudiant(id: number) {
    const idEtudiant = this.pendingData.find((d: Demande) => d.id === id).etudiant_id;
    console.log(idEtudiant);
    const result: any = await this.demandesPending.getEtudiant(idEtudiant);
    console.log(result);
    return result[0];
  }

  private capitalizeWords(input: string): string {
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}

