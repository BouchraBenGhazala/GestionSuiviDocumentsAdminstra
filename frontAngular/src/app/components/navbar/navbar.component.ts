import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  public loggedIn:boolean;

    constructor(
      private Auth:AuthService
    ) { 
      this.loggedIn = false; // Initialize loggedIn property
    }

    ngOnInit(){
      this.Auth.authStatus.subscribe(value=>this.loggedIn=value); 
    }

    logout(event:MouseEvent){
      event.preventDefault();
      localStorage.removeItem('token');
      this.Auth.changeAuthStatus(false);
    }
    
}
