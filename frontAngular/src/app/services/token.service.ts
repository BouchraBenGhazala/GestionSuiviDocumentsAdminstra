import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token:any){
    this.set(token);
    console.log(this.loggedIn());
  }
  set(token:any){
    localStorage.setItem('token',token);
  }
  get(){
    return localStorage.getItem('token');
  }
  remove(){
    localStorage.removeItem('token');
  }
  isValid(){
    const token=this.get();
    if(this.get()){
      const payload=this.payload(token);
      if(payload){
        return (payload.iss==='http://localhost:8000/api/login')?true:false;
      }
    }
    return false;
  }
  payload(token:any){
    const payload=token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload:any){
    return JSON.parse(atob(payload));
  }
  loggedIn(){
    return this.isValid();
  }
  // Dans TokenService

  getRole() {
    const token = this.get();
    if (token) {
        const payload = this.payload(token);
        if (payload) {
            console.log(payload)
            return payload.role;
        }
    }
    return null;
  }
  getUsername() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        console.log(payload.username);
        return payload.username;
      }
    }
    return null;
  }

}
