import { Component, OnInit } from '@angular/core';
import { BouchraService } from '../../services/bouchra.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public form={
    email:null,
    password:null
  }
  constructor(
    private bouchra:BouchraService,
    private token:TokenService,
    private router:Router,
    private auth:AuthService
    ) {

  }
  public error=null;

  

  onSubmit() {
    // console.log(this.form);
    this.bouchra.login(this.form).subscribe(
      // data=> console.log(data),
      data=>this.handleResponse(data),
      error=> this.handleError(error),
      
    );
  }
  handleError(error:any){
    this.error=error.error.error;
  }
  handleResponse(data:any){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
  ngOnInit(){

  }

}
