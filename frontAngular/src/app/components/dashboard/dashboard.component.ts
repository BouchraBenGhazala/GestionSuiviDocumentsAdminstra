import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
   
  demandes: any=[];


  constructor(private demandesData: DemandesData){}

  ngOnInit(): void {
    this.getDemandesData();
    console.log(typeof(this.demandes), this.demandes);
  }

  getDemandesData(){
    this.demandesData.getAllData().subscribe(res => {
      console.log(res);
      this.demandes = res;
    })
  }


  //  getFiltredDemande(state: String){
  //     this.demandesData.getFiltredData().subscribe(res => {
  //       console.log(res);
  //       this.demandes = res;
  //     })
  // }
}
