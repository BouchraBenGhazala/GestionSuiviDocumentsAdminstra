import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  public loggedIn:boolean;

    constructor(
      private Auth:AuthService,
      private router:Router,
      private token:TokenService
    ) { 
      this.loggedIn = false; // Initialize loggedIn property
    }

    ngOnInit(){
      this.Auth.authStatus.subscribe(value=>this.loggedIn=value); 
    }

    logout(event:MouseEvent){
      event.preventDefault();
      // localStorage.removeItem('token');
      this.token.remove();
      this.Auth.changeAuthStatus(false);
      this.router.navigateByUrl('/login');
    }
    
}
