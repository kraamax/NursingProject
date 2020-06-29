import { Component, OnInit, Input } from '@angular/core';
import { VitalSigns } from 'src/app/models/vital-signs';
import { VitalSignsService } from 'src/app/services/vital-signs.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {
  @Input() idPaciente:string;
  vitalSigns:VitalSigns;
  isEditable:boolean;
  isUndefinedVitalSigns:boolean;
  constructor(private vitalSignsService:VitalSignsService) { }

  ngOnInit() {
    this.isEditable=false;
    this.vitalSigns=new VitalSigns();
    this.getCurrentVitalSigns();   
     
  }
  getCurrentVitalSigns(){
    this.vitalSignsService.getVitalSignsByPaciente(this.idPaciente).subscribe(rest=>{
        if(isUndefined(rest)){
          this.isUndefinedVitalSigns=true;
          this.isEditable=true;
        }else{
          this.isUndefinedVitalSigns=false;
          this.vitalSigns=rest;
          this.isEditable=false;
        }
      })
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
  addVitalSigns(){
    if(!isUndefined(this.isUndefinedVitalSigns)){
      if(this.isUndefinedVitalSigns){
        this.vitalSigns.pacienteId=this.idPaciente;
        this.vitalSignsService.addVitalSigns(this.vitalSigns).subscribe(rest=>this.getCurrentVitalSigns());
      }else{
        this.vitalSignsService.update(this.vitalSigns).subscribe(rest=>this.getCurrentVitalSigns());
      }
    }else{
      alert("Cargando registros...Intente de nuevo");
    }
  }
  
}
