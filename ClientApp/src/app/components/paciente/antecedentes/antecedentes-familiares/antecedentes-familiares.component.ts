import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { FamilyBackground } from 'src/app/models/backgrounds/family-background';
import { FamilyBackgroundService } from 'src/app/services/Backgrounds/family-background.service';
import { isUndefined } from 'util';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-antecedentes-familiares',
  templateUrl: './antecedentes-familiares.component.html',
  styleUrls: ['./antecedentes-familiares.component.css']
})
export class AntecedentesFamiliaresComponent implements OnInit {
@Input() idPaciente:string;
isEditable:boolean;
isUndefinedBackground:boolean;
familyBackground:FamilyBackground;
  constructor(
    private familyBackgroundService:FamilyBackgroundService,
    ) 
    {
    }

  ngOnInit() {
    this.isEditable=false;

    this.familyBackground=new FamilyBackground();
    this.getCurrentFamilyBackground();
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
  getCurrentFamilyBackground(){
    this.familyBackgroundService.getFamilyBackgroundByPaciente(this.idPaciente).subscribe(rest=>{
      if(isUndefined(rest)){
        this.isUndefinedBackground=true;
        this.familyBackground=new FamilyBackground();
        this.isEditable=true;
      }else{
        this.isUndefinedBackground=false;
        this.familyBackground=rest;
        this.isEditable=false;
      }
    })
  }

  addFamilyBackground(){
    if(!isUndefined(this.isUndefinedBackground)){
      if(this.isUndefinedBackground){
        this.familyBackground.pacienteId=this.idPaciente;
        this.familyBackgroundService.addFamilyBackground(this.familyBackground).subscribe(rest=>this.getCurrentFamilyBackground());
      }else{
        this.familyBackgroundService.update(this.familyBackground).subscribe(rest=>this.getCurrentFamilyBackground());
      }
    }else{
      alert("Cargando registros...Intente de nuevo");
    }
  }
}
