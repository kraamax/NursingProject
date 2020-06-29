import { Component, OnInit, Input } from '@angular/core';
import { GinecoBackground } from 'src/app/models/backgrounds/gineco-background';
import { GinecoBackgroundService } from 'src/app/services/Backgrounds/gineco-background.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-gineco-obstetricos',
  templateUrl: './gineco-obstetricos.component.html',
  styleUrls: ['./gineco-obstetricos.component.css']
})
export class GinecoObstetricosComponent implements OnInit {
numbers:number[];
i:number;
@Input() idPaciente:string;
isUndefinedBackground:boolean;
ginecoBackground:GinecoBackground;
  constructor(private ginecoBackgroundService:GinecoBackgroundService) { }

  ngOnInit() {
    this.generateNewGinecoBackground();
    this.getCurrentGinecoBackground();
    this.generateComboBoxSecuence();
  }
  
  generateComboBoxSecuence(){
    this.numbers=[];
    for(this.i=1;this.i<100;this.i++){
    this.numbers.push(this.i);
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
      }else{
        this.isUndefinedBackground=false;
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
        this.ginecoBackgroundService.addGinecoBackground(this.ginecoBackground).subscribe(rest=>this.getCurrentGinecoBackground());
      }else{
        this.ginecoBackgroundService.update(this.ginecoBackground).subscribe(rest=>this.getCurrentGinecoBackground());
      } 
    }else{
      alert("Cargando registros...Intente de nuevo");
    }
  }
}
