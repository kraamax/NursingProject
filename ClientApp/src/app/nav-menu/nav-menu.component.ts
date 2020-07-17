import { Component } from '@angular/core';

import * as $ from 'jquery';
import { NavbarService } from '../services/navbar.service';
import { UserLoginService } from '../services/user-login.service';
import { MatDialog } from '@angular/material';
import { SendRequestDialogComponent } from '../components/student/send-request-dialog/send-request-dialog.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  visibleSideBar:boolean;
  visibleNavBar:boolean;

  role:string;
  constructor( private navbarService:NavbarService, private userLoginService:UserLoginService, private dialog:MatDialog ){
    this.userLoginService.currentRole.subscribe(res=>{this.role=res;});
     this.navbarService.visibleSideBar.subscribe(visible=>{this.visibleSideBar=visible});
    this.navbarService.visibleNavBar.subscribe(visible=>this.visibleNavBar=visible);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SendRequestDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }
  logOut(){
    this.userLoginService.ClearLocalStorage();
  }
}
