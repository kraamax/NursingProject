import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { Account } from 'src/app/models/account';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApplicationUser } from 'src/app/models/application-user';
import { ApplicationUserService } from 'src/app/services/application-user.service';

@Component({
  selector: 'app-sign-up-students',
  templateUrl: './sign-up-students.component.html',
  styleUrls: ['./sign-up-students.component.css']
})
export class SignUpStudentsComponent implements OnInit {

  personalData:FormGroup;
  accountData:FormGroup;
  user:ApplicationUser;
  constructor(
    private formBuilder: FormBuilder, 
    private location:Location, 
    private applicationUserService:ApplicationUserService, 
    private router:Router,
    private toastr:ToastrService
    ) { }
  ngOnInit() {
    this.user=new ApplicationUser();
    this.user.sex="";
    this.user.secondLastName="";
    this.user.secondName="";
    this.personalData = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      secondName: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      secondLastName: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      firstLastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      phone: ['', [Validators.required]],
      locationBiannual: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      bornDate: ['', [Validators.required]],
      sex: ['', [Validators.required]],
   
    });
    this.accountData = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
 

  goBack(){
    this.location.back();
  }
  goToLogin(){
    this.router.navigate(["/login"]);
  }
  addStudent(){
    this.user.id=(document.getElementById("identificacion") as HTMLInputElement).value;
    this.user.email=(document.getElementById("email") as HTMLInputElement).value;
    this.user.phoneNumber=(document.getElementById("phone") as HTMLInputElement).value;
    this.user.password=(document.getElementById("password") as HTMLInputElement).value;
    this.user.rol="Student";
    console.log(this.user);
    this.applicationUserService.addUser(this.user).subscribe((rest:any) => {
      if(rest.succeeded){
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
}
