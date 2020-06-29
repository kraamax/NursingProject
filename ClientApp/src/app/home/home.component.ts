import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor( private navbarService:NavbarService){
    navbarService.showNavBar();
    navbarService.showSideBar();
  }
}
