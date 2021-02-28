import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { PatientFollowUp } from 'src/app/models/patient-follow-up';
import { PatientFollowUpService } from 'src/app/services/patient-follow-up.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit {
  followUp:PatientFollowUp;
  idPatient:string;
  patient:Paciente;
  followUpForm:FormGroup;
  currentDate:string;
  constructor(
    private navbarService:NavbarService, 
    private followUpService:PatientFollowUpService,
    private route:ActivatedRoute,
    private encrytionService:EncryptionService,
    private patientService:PacienteService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder, 
    private location:Location, 
    private userLoginService:UserLoginService,
    private router:Router
    ) { }
  

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.followUp=new PatientFollowUp();
    this.followUpForm=this.formBuilder.group({
      findings:[],
      nursingDiagnosis:[],
      nic:[],
      noc:[]

    });
    this.idPatient=this.encrytionService.decrypt(this.route.snapshot.paramMap.get("idPatient"));
    this.patient=new Paciente();
    this.verifyUser();
    this.currentDate=new Date().toLocaleDateString();
  }
  verifyUser(){
    this.patientService.getPaciente(this.idPatient).subscribe(patient => {
      (this.patient = patient);
      this.userLoginService.getLoggedUserProfile().subscribe((res:any)=>{
        if(this.patient.responsibleNurseId!=res.id){
          this.router.navigate(['']);
        }
      })
    });
}
  goBack(){
    this.location.back();
  }
  addFollowUp(){
    this.followUp.date= new Date().toLocaleDateString();
    this.followUp.idPatient=this.idPatient;
    this.followUpService.addFollowUp(this.followUp).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.toastrService.success("Se ha registrado el seguimiento","Operación Realizada")
        this.goBack();
      }else{
        this.toastrService.error("Algo ha salido mal","Operación Fallida");
        console.log(res);
      }
    });
  }
}
