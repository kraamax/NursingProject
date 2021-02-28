import { Component, OnInit, Input } from '@angular/core';
import { GinecoBackground } from 'src/app/models/backgrounds/gineco-background';
import { GinecoBackgroundService } from 'src/app/services/Backgrounds/gineco-background.service';
import { isUndefined } from 'util';
import { UserLoginService } from 'src/app/services/user-login.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gineco-obstetricos',
  templateUrl: './gineco-obstetricos.component.html',
  styleUrls: ['./gineco-obstetricos.component.css']
})
export class GinecoObstetricosComponent implements OnInit {
numbers:string[];
i:number;
@Input() idPaciente:string;
isUndefinedBackground:boolean;
ginecoBackground:GinecoBackground;
formGineco:FormGroup
role:string;
isEditable:boolean;
  constructor(private ginecoBackgroundService:GinecoBackgroundService, private formBuilder:FormBuilder) { 
  }

  ngOnInit() {
    this.generateNewGinecoBackground();
    this.formGineco= this.formBuilder.group({
      g:[],
      a:[],
      c:[],
      p:[],
      menarche:[],
      results:[],
      dateLastCytology:[],
      performedCytology:[],
      menopausia:[],
      ivs:[],
      ciclos:[],
      fum:[]
    });
    this.isEditable=false;
    this.formGineco.controls["g"].disable();
    this.formGineco.controls["a"].disable();
    this.formGineco.controls["c"].disable();
    this.formGineco.controls["p"].disable();
    this.formGineco.controls["performedCytology"].disable();
    this.getCurrentGinecoBackground();
    this.generateComboBoxSecuence();
  }
  ngOnChanges(){
    this.managementInputs();
    if(this.ginecoBackground.performedCytology){
      this.formGineco.controls["dateLastCytology"].enable();
      this.formGineco.controls["results"].enable();
    }else{
      this.formGineco.controls["dateLastCytology"].disable();
      this.formGineco.controls["results"].disable();
    }
  }
  managementInputs(){
    if(this.isEditable==false){
      this.formGineco.controls["g"].disable();
        this.formGineco.controls["a"].disable();
        this.formGineco.controls["c"].disable();
        this.formGineco.controls["p"].disable();
        this.formGineco.controls["performedCytology"].disable();
    }else{
      this.formGineco.controls["g"].enable();
      this.formGineco.controls["a"].enable();
      this.formGineco.controls["c"].enable();
      this.formGineco.controls["p"].enable();
      this.formGineco.controls["performedCytology"].enable();
    }
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
    this.managementInputs();
  }
  generateComboBoxSecuence(){
    this.numbers=[];
    for(this.i=1;this.i<100;this.i++){
    this.numbers.push(this.i.toString());
    }
  }
  generateNewGinecoBackground(){
    this.ginecoBackground=new GinecoBackground();
    this.ginecoBackground.performedCytology=false;
  }
  getCurrentGinecoBackground(){
    this.ginecoBackgroundService.getGinecoBackgroundByPaciente(this.idPaciente).subscribe(rest=>{
      if(isUndefined(rest)){
        this.isUndefinedBackground=true;
        this.isEditable=true;
        this.managementInputs();
      }else{
        this.isUndefinedBackground=false;
        this.isEditable=false;
        this.managementInputs();
        this.ginecoBackground=rest;
      }
    })
  }
  addGinecoBackground(){
  if(this.ginecoBackground.performedCytology==false){
    this.ginecoBackground.results="";
    this.ginecoBackground.dateLastCytology="";
  }
  if(!isUndefined(this.isUndefinedBackground)){    
      if(this.isUndefinedBackground){
        this.ginecoBackground.pacienteId=this.idPaciente;
        console.log(this.ginecoBackground);
        this.ginecoBackgroundService.addGinecoBackground(this.ginecoBackground).subscribe(rest=>this.getCurrentGinecoBackground());
      }else{
        console.log(this.ginecoBackground);
        this.ginecoBackgroundService.update(this.ginecoBackground).subscribe(rest=>this.getCurrentGinecoBackground());
      } 
    }else{
      alert("Cargando registros...Intente de nuevo");
    }
  }
}
