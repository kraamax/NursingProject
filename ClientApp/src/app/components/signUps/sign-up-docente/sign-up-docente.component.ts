import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { Docente } from 'src/app/models/docente';
import { Location } from '@angular/common';
import { DocenteService } from 'src/app/services/docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-docente',
  templateUrl: './sign-up-docente.component.html',
  styleUrls: ['./sign-up-docente.component.css']
})
export class SignUpDocenteComponent implements OnInit {


  userForm:FormGroup;
  docente:Docente;
  constructor(private formBuilder: FormBuilder,private location:Location,private docenteService:DocenteService, private router:Router) { }
  ngOnInit() {
    this.docente=new Docente();
    this.docente.sex="";
    this.docente.account=new Account();
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      secondName: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      secondLastName: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      firstLastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      bornDate: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]]
    });
  }
 goBack(){
   this.location.back();
 }
goToLogin(){
  this.router.navigate(["/login"]);
}
  addDocente(){
    this.docente.idDocente=(document.getElementById("identificacion") as HTMLInputElement).value;
    this.docente.email=(document.getElementById("email") as HTMLInputElement).value;
    this.docente.account.user=(this.docente.email);
    this.docente.account.activated=false;
    this.docenteService.addDocente(this.docente).subscribe(rest=>this.goToLogin());
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
