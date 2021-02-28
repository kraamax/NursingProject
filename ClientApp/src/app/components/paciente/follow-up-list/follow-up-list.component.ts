import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { PatientFollowUpService } from 'src/app/services/patient-follow-up.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientFollowUp } from 'src/app/models/patient-follow-up';
import { EncryptionService } from 'src/app/services/encryption.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-follow-up-list',
  templateUrl: './follow-up-list.component.html',
  styleUrls: ['./follow-up-list.component.css']
})
export class FollowUpListComponent implements OnInit {
  idPatient:string;
  idEncrypted:string;
  followUps:PatientFollowUp[];
  patient:Paciente;

  constructor(
    private navbarService:NavbarService, 
    private followUpService:PatientFollowUpService,
    private encryptionService:EncryptionService,
    private route:ActivatedRoute,
    private router:Router,
    private patientService:PacienteService,
    private userLoginService:UserLoginService,

    ) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.followUps=[];
    this.patient=new Paciente();
    this.idEncrypted=this.route.snapshot.paramMap.get("idPatient");
    this.idPatient=this.encryptionService.decrypt(this.idEncrypted);
    this.verifyUser();
    this.followUpService.GetFollowUps(this.idPatient).subscribe(res=>this.followUps=res);
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
  goToFollowUp(){
   this.router.navigate(["followUp",this.idEncrypted]);
  }
  goToFollowUpSee(id:number){
    var encryptedId=this.encryptionService.encrypt(id.toString());
    this.router.navigate(["followUpSee",encryptedId]);
  }
}
