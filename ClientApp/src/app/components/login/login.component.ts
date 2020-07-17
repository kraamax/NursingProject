import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';
import { LoginModel } from 'src/app/models/login-model';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  loginModel:LoginModel;
  constructor(private formBuilder: FormBuilder, 
    private navBarService:NavbarService,
    private loginService:UserLoginService,
    private router:Router,
    private toastr:ToastrService,
    )
  {
  }
  ngOnInit() {
    if(localStorage.getItem('token')!=null)
    {
      this.router.navigateByUrl("");
    }
    this.navBarService.hideSideBar();
    this.navBarService.hideNavBar();
    this.loginModel= new LoginModel();
  }
  login(){
    this.loginService.loginUser(this.loginModel).subscribe((res:any)=>{
      if(res.isEnable==true){
        this.loginService.setToken(res.token);
        this.router.navigateByUrl("");
        localStorage.setItem("role",res.rol);
        this.loginService.getRol();
      }else{
        this.toastr.info("Su solicitud de registro necesita ser admitida");
      }
    },
    err=>{
      if(err.status==400){
          this.toastr.error("Usuario y/o contraseña incorrectos", "Autenticación fallida");
      }else{
        console.log(err);
      }

    });
  }
}

