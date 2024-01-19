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
    sessionStorage.setItem('token',token);
  }
  get(){
    return sessionStorage.getItem('token');
  }
  remove(){
    sessionStorage.removeItem('token');
  }
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        const expiration = payload.exp * 1000; // Convert seconds to milliseconds
        return expiration > Date.now();
      }
    }
    return false;
  }
  // isValid(){
  //   const token=this.get();
  //   if(token){
  //     const payload=this.payload(token);
  //     if(payload){
  //       return (payload.iss==='http://localhost:8000/api/login')?true:false;
  //     }
  //   }
  //   return false;
  // }
  payload(token: any) {
    const payload = token.split('.')[1];
    console.log(payload);
    return payload ? this.decode(payload) : null;
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
