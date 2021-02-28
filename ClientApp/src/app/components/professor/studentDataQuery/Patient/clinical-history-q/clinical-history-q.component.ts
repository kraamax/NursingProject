import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { Companion } from 'src/app/models/companion';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';
import { CompanionService } from 'src/app/services/companion.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-clinical-history-q',
  templateUrl: './clinical-history-q.component.html',
  styleUrls: ['./clinical-history-q.component.css']
})
export class ClinicalHistoryQComponent implements OnInit {
  paciente:Paciente;
  companion:Companion;
  companionIsUndefined:boolean;
  idPaciente:string;
  isEditable:boolean;
  constructor(
    private route:ActivatedRoute,
    private pacienteService:PacienteService,
    private companionService:CompanionService,
    private navbarService:NavbarService,
    private encryptionService:EncryptionService, 
    private userLoginService:UserLoginService,
    private router:Router
    ) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.paciente=new Paciente();
    this.verifyUser();
    this.getCurrentCompanion();
    this.isEditable=false;
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
  getPaciente(): void {
    this.idPaciente = this.encryptionService.decrypt(this.route.snapshot.paramMap.get("idPaciente"));
    this.pacienteService.getPaciente(this.idPaciente.toString()).subscribe(paciente => {
      (this.paciente = paciente);
    });
  }
  verifyUser(){
      this.idPaciente = this.encryptionService.decrypt(this.route.snapshot.paramMap.get("idPaciente"));
      this.pacienteService.getPaciente(this.idPaciente.toString()).subscribe(paciente => {
        (this.paciente = paciente);
        this.userLoginService.getLoggedUserProfile().subscribe((res:any)=>{
          if(res.rol=="Professor"){
          }else{
          if(this.paciente.responsibleNurseId!=res.id){
            this.router.navigate(['']);
          }
        }
        })
      });
  }
  getCurrentCompanion(){
    this.companionService.getCompanionByPaciente(this.idPaciente.toString()).subscribe(companion=>{
      this.companion=companion;
      if(isUndefined(companion)){
        this.companionIsUndefined=true;
      }else{
        this.companionIsUndefined=false;
      }
    });
  }
  onTabClick($event){
    if($event.index==2){
      this.getPaciente();
    }
  }

}
