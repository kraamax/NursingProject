import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paciente-see-datos-p',
  templateUrl: './paciente-see-datos-p.component.html',
  styleUrls: ['./paciente-see-datos-p.component.css']
})
export class PacienteSeeDatosPComponent implements OnInit {
 @Input() paciente:Paciente;
 isEditable:boolean;
 formPatient:FormGroup;
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
    this.formPatient.controls["haveHipertension"].disable();
    this.formPatient.controls["haveDiabetes"].disable();
    this.formPatient.controls["maritalStatus"].disable();
    this.formPatient.controls["sex"].disable();
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
    if(this.isEditable==true){
      this.formPatient.controls["haveHipertension"].enable();
      this.formPatient.controls["haveDiabetes"].enable();
      this.formPatient.controls["maritalStatus"].enable();
      this.formPatient.controls["sex"].enable();
    }else{
      this.formPatient.controls["haveHipertension"].disable();
      this.formPatient.controls["haveDiabetes"].disable();
      this.formPatient.controls["maritalStatus"].disable();
      this.formPatient.controls["sex"].disable();
    }
  }
updatePaciente(){
  this.pacienteService.update(this.paciente).subscribe(rest=>this.toggleEdit());
}

}
