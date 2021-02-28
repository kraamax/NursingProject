import { Component, OnInit, Input } from '@angular/core';
import { VitalSigns } from 'src/app/models/vital-signs';
import { VitalSignsService } from 'src/app/services/vital-signs.service';
import { isUndefined } from 'util';
import { UserLoginService } from 'src/app/services/user-login.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  formVitalSigns:FormGroup;
  constructor(private vitalSignsService:VitalSignsService, private formBuilder:FormBuilder) {
   }

  ngOnInit() {
    this.isEditable=false;
    this.vitalSigns=new VitalSigns();
    this.formVitalSigns=this.formBuilder.group({
      bpd:[],
      bps:[],
      breath:[],
      pulse:[],
      temperature:[],
      typeGlycemia:[],
      glycemia:[]
    });
    this.formVitalSigns.controls["typeGlycemia"].disable();
    this.getCurrentVitalSigns();   
     
  }
  getCurrentVitalSigns(){
    this.vitalSignsService.getVitalSignsByPaciente(this.idPaciente).subscribe(rest=>{
        if(isUndefined(rest)){
          this.isUndefinedVitalSigns=true;
          this.isEditable=true;
          this.formVitalSigns.controls["typeGlycemia"].enable();
        }else{
          this.isUndefinedVitalSigns=false;
          this.vitalSigns=rest;
          this.isEditable=false;
          this.formVitalSigns.controls["typeGlycemia"].disable();
        }
      })
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
    if(this.isEditable==false){
      this.formVitalSigns.controls["typeGlycemia"].disable();
    }else{
      this.formVitalSigns.controls["typeGlycemia"].enable();
    }
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
