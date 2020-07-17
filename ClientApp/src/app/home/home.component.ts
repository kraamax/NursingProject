import { Component } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor( private navbarService:NavbarService, private userLoginService:UserLoginService){
    navbarService.showNavBar();
    navbarService.showSideBar();
userLoginService.getRol();
  }
}
