import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataParametersService } from 'src/app/services/data-parameters.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-patient-list-for-follow-up',
  templateUrl: './patient-list-for-follow-up.component.html',
  styleUrls: ['./patient-list-for-follow-up.component.css']
})
export class PatientListForFollowUpComponent implements OnInit {
  pacientes:Paciente[];
  constructor(
    private pacienteService:PacienteService, 
    private navbarService:NavbarService,
    private dataParametersService:DataParametersService,
    private router:Router,
    private route:ActivatedRoute,
    private encyptionService:EncryptionService,
    private userLoginService:UserLoginService
  ) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.pacientes=[];
    this.getPacientes();
  }
  getPacientes(){
    this.userLoginService.getLoggedUserProfile().subscribe((res:any)=>{
      this.pacienteService.getPacientesByNurse(res.id).subscribe(pacientes=>this.pacientes=pacientes);
    })
  }
  goToFollowUpList(idPaciente:any){
    var encryptedId=this.encyptionService.encrypt(idPaciente);
    this.router.navigate(["followUpList",encryptedId]);
  }

}
