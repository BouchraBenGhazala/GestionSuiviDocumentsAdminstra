import { Component, OnInit } from '@angular/core';
import { BouchraService } from '../../services/bouchra.service';

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
  constructor(private bouchra:BouchraService) {

  }
  public error=null;

  

  onSubmit() {
    // console.log(this.form);
    this.bouchra.login(this.form).subscribe(
      data=> console.log(data),
      error=> this.handleError(error),
    );
  }
  handleError(error:any){
    this.error=error.error.error;
  }
  ngOnInit(){

  }

}
