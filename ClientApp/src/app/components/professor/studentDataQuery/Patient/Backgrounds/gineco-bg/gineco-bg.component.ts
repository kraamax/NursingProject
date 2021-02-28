import { Component, OnInit, Input } from '@angular/core';
import { GinecoBackground } from 'src/app/models/backgrounds/gineco-background';
import { GinecoBackgroundService } from 'src/app/services/Backgrounds/gineco-background.service';
import { isUndefined } from 'util';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gineco-bg',
  templateUrl: './gineco-bg.component.html',
  styleUrls: ['./gineco-bg.component.css']
})
export class GinecoBGComponent implements OnInit {
  numbers:string[];
  i:number;
  @Input() idPaciente:string;
  isUndefinedBackground:boolean;
  ginecoBackground:GinecoBackground;
  formGineco:FormGroup;
  role:string;
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
      this.formGineco.controls["g"].disable();
      this.formGineco.controls["a"].disable();
      this.formGineco.controls["c"].disable();
      this.formGineco.controls["p"].disable();
      this.formGineco.controls["performedCytology"].disable();
      this.getCurrentGinecoBackground();
      this.generateComboBoxSecuence();
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
         
        }else{
          this.isUndefinedBackground=false;
          this.ginecoBackground=rest;
          console.log(rest);
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
