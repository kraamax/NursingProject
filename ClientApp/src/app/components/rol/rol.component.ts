import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart, NavigationExtras } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit,OnDestroy {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private router:Router,private navbarService:NavbarService) {
    iconRegistry.addSvgIcon(
      'teacher',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/profesor.svg'));
    iconRegistry.addSvgIcon(
      'student',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/estudiante.svg'));
   }
   ngOnDestroy(){

   }
  ngOnInit() {
    this.navbarService.hideNavBar();
    this.navbarService.hideSideBar();
  }
  goToSignUpTeacher(){
    let navigationExtras: NavigationExtras = {
      queryParams: { 'rol': "Docente" },

    };
    this.router.navigate(["/signUp/docente"]);
  }
  goToSignUpStudent(){
    this.router.navigate(["/signUp/estudiante"]);
  }

}
