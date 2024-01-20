import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges{
  title = 'frontAngular';
  sideNav: any = { collapsed: true };
  public loggedIn: boolean;
  public role: string;

  constructor(public autService:AuthService, public token:TokenService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.autService.authStatus.subscribe(value=>this.loggedIn=value); 
    console.log(this.loggedIn);
    this.role = this.token.getRole();
    console.log(this.role);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  handleCollapsedChange($event: any): void {
    // Do something with the collapsed value
    console.log('Collapsed value:', $event);
    this.sideNav = $event; 
  }
}
