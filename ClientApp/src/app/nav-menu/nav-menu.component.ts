import { Component } from '@angular/core';

import * as $ from 'jquery';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  visibleSideBar:boolean;
  visibleNavBar:boolean;
  constructor(private navbarService:NavbarService){
    this.navbarService.visibleSideBar.subscribe(visible=>this.visibleSideBar=visible);
    this.navbarService.visibleNavBar.subscribe(visible=>this.visibleNavBar=visible);

  }
  collapse() {
    this.isExpanded = false;

  }
  toggle() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }
}
