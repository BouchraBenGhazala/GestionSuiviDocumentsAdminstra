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

  getFiltredData(){
    return this.httpClient.get('');
  }
  
}