import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { _MatTabBodyBase } from '@angular/material';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-paciente-add',
  templateUrl: './paciente-add.component.html',
  styleUrls: ['./paciente-add.component.css']
})
export class PacienteAddComponent implements OnInit {
  paciente:Paciente;
  today:Date;
  responsibleNurseId:string;
  constructor(
    private pacienteService:PacienteService,
    private navbarService:NavbarService,
    private userLoginService:UserLoginService
    ) { }

  ngOnInit() {
  this.navbarService.showNavBar();
  this.navbarService.showSideBar();
  this.generateNewPaciente();
  this.userLoginService.getLoggedUserProfile().subscribe((res:any)=>this.responsibleNurseId=res.id)
  }
  generateNewPaciente(){
    this.paciente=new Paciente();
    this.paciente.haveDiabetes=false;
    this.paciente.haveHipertension=false;
    this.paciente.OtherDiagnostic="";
   this.today=new Date();
    this.paciente.registrationDate=this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
  }
  addPaciente(){
    this.generateNewPaciente();
    this.paciente.bornDate=(document.getElementById("bornDate") as HTMLInputElement).value;
    this.paciente.idPaciente=(document.getElementById("identificacion") as HTMLInputElement).value;
    this.paciente.responsibleNurseId=this.responsibleNurseId;
    this.paciente.diagnostic="";
    console.log(this.paciente);
    this.pacienteService.addPaciente(this.paciente).subscribe();
  }
have(){
  console.log(this.paciente.haveDiabetes);
  console.log(this.paciente.haveHipertension);
}
}
