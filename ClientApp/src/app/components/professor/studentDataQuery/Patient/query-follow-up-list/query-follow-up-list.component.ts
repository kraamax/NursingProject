import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';
import { PatientFollowUpService } from 'src/app/services/patient-follow-up.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { PatientFollowUp } from 'src/app/models/patient-follow-up';

@Component({
  selector: 'app-query-follow-up-list',
  templateUrl: './query-follow-up-list.component.html',
  styleUrls: ['./query-follow-up-list.component.css']
})
export class QueryFollowUpListComponent implements OnInit {
  patient:Paciente;
  followUps:PatientFollowUp[];
  idEncrypted:string;
  idPatient:string;

  constructor(
    private navbarService:NavbarService, 
    private followUpService:PatientFollowUpService,
    private encryptionService:EncryptionService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.followUps=[];
    this.patient=new Paciente();
    this.idEncrypted=this.route.snapshot.paramMap.get("idPatient");
    this.idPatient=this.encryptionService.decrypt(this.idEncrypted);
    this.followUpService.GetFollowUps(this.idPatient).subscribe(res=>this.followUps=res);
  }
  goToFollowUpSee(id:number){
    var encryptedId=this.encryptionService.encrypt(id.toString());
    this.router.navigate(["followUpSee",encryptedId]);
  }

}
