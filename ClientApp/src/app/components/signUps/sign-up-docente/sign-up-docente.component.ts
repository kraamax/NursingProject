import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { Docente } from 'src/app/models/docente';
import { Location } from '@angular/common';
import { DocenteService } from 'src/app/services/docente.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { ApplicationUser } from 'src/app/models/application-user';
import { ApplicationUserService } from 'src/app/services/application-user.service';

@Component({
  selector: 'app-sign-up-docente',
  templateUrl: './sign-up-docente.component.html',
  styleUrls: ['./sign-up-docente.component.css']
})
export class SignUpDocenteComponent implements OnInit {


  userForm:FormGroup;
  user:ApplicationUser;
  personalData:FormGroup;
  accountData:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private location:Location,
    private applicationUserService:ApplicationUserService, 
    private router:Router,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.user=new ApplicationUser();
    this.user.sex="";
    this.user.secondLastName="";
    this.user.secondName="";
    this.personalData = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      secondName: ['', [Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      secondLastName: ['', [Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      firstLastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      phone: ['', [Validators.required, Validators.min(0)]],
     
      identificacion: ['', [Validators.required, Validators.min(0)]],
      bornDate: ['', [Validators.required]],
      sex: ['', [Validators.required]],
   
    });
    this.accountData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]],
    });
  }
 goBack(){
   this.location.back();
 }
goToLogin(){
  this.router.navigate(["/login"]);
}
  addDocente(){
    this.user.id=(document.getElementById("identificacion") as HTMLInputElement).value;
    this.user.phoneNumber=(document.getElementById("phone") as HTMLInputElement).value;
    this.user.email = (document.getElementById("email") as HTMLInputElement).value;
    this.user.password = (document.getElementById("password") as HTMLInputElement).value;
    this.user.rol="Professor";
    this.applicationUserService.addUser(this.user).subscribe((rest:any) => {
      if(rest.succeeded){
        console.log(rest);
        this.toastr.success("Se han registrado con exíto","Operación Realizada");
        this.goToLogin()
      }else{
        rest.errors.forEach(element => {
          switch (element.code) {
            case 'DuplicateUserName':
              this.toastr.error("El usuario ya existe", "Falló el registro");
              break;
            default:
              alert(element.code);
              break;
          }
        });
      }
    },
    err => {
        console.log(err);
    }
    );
  }
  onSubmit(){
    if(this.userForm.valid){
      alert('User form is valid!!')
      console.log(  this.userForm.get("email2").value);
    } else {
      alert('User form is not valid!!')
    }
  }
}
