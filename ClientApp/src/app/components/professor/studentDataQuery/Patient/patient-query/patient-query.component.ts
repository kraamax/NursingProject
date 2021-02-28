import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-query',
  templateUrl: './patient-query.component.html',
  styleUrls: ['./patient-query.component.css']
})
export class PatientQueryComponent implements OnInit {
  @Input() paciente:Paciente;
  isEditable:boolean;
  formPatient:FormGroup
   constructor(private pacienteService:PacienteService, private formBuilder:FormBuilder) {
    }
 
   ngOnInit() {
     this.isEditable=false;
     this.formPatient= this.formBuilder.group({
      names:[],
      bornDate:[],
      lastNames:[],
      email:[Validators.email],
      address:[],
      scholarShip:[],
      sex:[],
      id:[],
      bornPlace:[],
      maritalStatus:[],
      healtInstitution:[],
      phoneNumber:[],
      haveDiabetes:[],
      haveHipertension:[],
      occupation:[],
      otherDiagnostic:[]
    });
    this.formPatient.controls["sex"].disable();
    this.formPatient.controls["maritalStatus"].disable();
    this.formPatient.controls["haveDiabetes"].disable();
    this.formPatient.controls["haveHipertension"].disable();
   }
   toggleEdit(){
     this.isEditable=!this.isEditable;
   }
 updatePaciente(){
   this.pacienteService.update(this.paciente).subscribe(rest=>this.toggleEdit());
 }
 
}
