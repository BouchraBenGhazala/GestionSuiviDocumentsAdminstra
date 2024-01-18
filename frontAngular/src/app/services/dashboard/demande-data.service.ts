import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
})
export class DemandesData {
  constructor(private httpClient: HttpClient) { }
  

  getAllData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getDemandes');
  }

  getFiltredData(state: string){
    return this.httpClient.get(`http://127.0.0.1:8000/api/getFiltredDemandes/${state}`);
  }

  async getEtudiant(id : number) : Promise<JSON | undefined>{
    // const data = await fetch(`http://127.0.0.1:8000/api/getEtudiant?id=${id}`);
    // return await data.json() ?? []; 
    return await this.fetchData(`http://127.0.0.1:8000/api/getEtudiant?id=${id}`);
  }

  async getInfosTypeDemande(type: string, id: number){
    return await this.fetchData(`http://127.0.0.1:8000/api/getInfosType/${type}_${id}`);
  }
  
  async fetchData(url : string){
    const data = await fetch(url);
    return await data.json() ?? []; 
  }
  
}