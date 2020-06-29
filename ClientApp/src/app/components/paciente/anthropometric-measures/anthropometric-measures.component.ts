import { Component, OnInit, Input } from '@angular/core';
import { AnthropometricMeasures } from 'src/app/models/anthropometric-measures';
import { AnthropometricMeasuresService } from 'src/app/services/anthropometric-measures.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-anthropometric-measures',
  templateUrl: './anthropometric-measures.component.html',
  styleUrls: ['./anthropometric-measures.component.css']
})
export class AnthropometricMeasuresComponent implements OnInit {
@Input() idPaciente:string;
anthropometricMeasures:AnthropometricMeasures;
isUndefinedMeasure:boolean;
isEditable:boolean;
  constructor(private anthropometricMeasuresService:AnthropometricMeasuresService) { }

  ngOnInit() {
    this.isEditable=false;
    this.anthropometricMeasures=new AnthropometricMeasures();
    this.getCurrentAntropometricMeasures();

  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
  getCurrentAntropometricMeasures(){
    this.anthropometricMeasuresService.getAnthropometricMeasuresByPaciente(this.idPaciente).subscribe(rest=>{
      if(isUndefined(rest)){
        this.isUndefinedMeasure=true;
        this.isEditable=true;
      }else{
        this.isEditable=false;
        this.isUndefinedMeasure=false;
        this.anthropometricMeasures=rest;
      }
    })
  }
  keyPress(){
    var weight=this.anthropometricMeasures.weight;
    var size=this.anthropometricMeasures.size;
    this.anthropometricMeasures.imc=Number.parseFloat((weight/(size*size)).toFixed(2));

  }
  haveRequiredFields():boolean{
    if(this.anthropometricMeasures.abdominalPerimeter==null||this.anthropometricMeasures.size==null || this.anthropometricMeasures.weight==null || this.anthropometricMeasures.thoracicPerimeter==null || this.anthropometricMeasures.cephalicPerimeter==null){
      alert("Llene los campos");
      return false;
    }
    return true;
  }
  addAnthropometricMeasures(){
    if(!isUndefined(this.isUndefinedMeasure)){
      if(this.isUndefinedMeasure){
        this.anthropometricMeasures.pacienteId=this.idPaciente;
        if(this.haveRequiredFields()){
        this.anthropometricMeasuresService.addAnthropometricMeasures(this.anthropometricMeasures).subscribe(rest=>{
          this.getCurrentAntropometricMeasures();
        });
        }
      }else{
        if(this.haveRequiredFields()){
        this.anthropometricMeasuresService.update(this.anthropometricMeasures).subscribe(rest=>{
          this.getCurrentAntropometricMeasures();
        });
      }
      }
    }else{
      alert("Cargando registros...Intente de nuevo")
    }
  }
}
