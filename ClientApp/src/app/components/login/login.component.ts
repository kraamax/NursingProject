import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private navBarService:NavbarService) {
    
   }
  ngOnInit() {
    this.navBarService.hideSideBar();
    this.navBarService.hideNavBar();
   
  }
 

  
}
/*export function emailValidator(control:FormControl){
if(control.value)
}*/

