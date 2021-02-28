import { Component, OnInit } from '@angular/core';
import { PatientFollowUp } from 'src/app/models/patient-follow-up';
import { Paciente } from 'src/app/models/paciente';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';
import { PatientFollowUpService } from 'src/app/services/patient-follow-up.service';
import { ActivatedRoute } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-follow-up-see',
  templateUrl: './follow-up-see.component.html',
  styleUrls: ['./follow-up-see.component.css']
})
export class FollowUpSeeComponent implements OnInit {
  followUp:PatientFollowUp;
  idFollowUp:string;
  patient:Paciente;
  followUpForm:FormGroup;
  
  constructor(
    private navbarService:NavbarService, 
    private followUpService:PatientFollowUpService,
    private route:ActivatedRoute,
    private encrytionService:EncryptionService,
    private patientService:PacienteService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.patient=new Paciente();
    this.followUp=new PatientFollowUp();
    this.idFollowUp=this.encrytionService.decrypt(this.route.snapshot.paramMap.get("idFollowUp"));
    this.followUpForm=this.formBuilder.group({
      findings:[],
      nursingDiagnosis:[],
      nic:[],
      noc:[]
    });
    this.followUpForm.disable();
    this.followUpService.getFollowUp(+this.idFollowUp).subscribe(res=>{
      this.followUp=res;
      this.patientService.getPaciente(this.followUp.idPatient).subscribe(patient=>this.patient=patient);
    });
  }

}
