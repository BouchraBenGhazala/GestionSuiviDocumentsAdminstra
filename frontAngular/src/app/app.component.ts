import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontAngular';
  sideNav: any = { collapsed: true };
  handleCollapsedChange($event: any): void {
    // Do something with the collapsed value
    console.log('Collapsed value:', $event);
    this.sideNav = $event; 
  }
}
