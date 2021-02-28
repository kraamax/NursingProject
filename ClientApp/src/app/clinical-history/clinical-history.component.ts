import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../services/paciente.service';
import { Paciente } from '../models/paciente';
import { CompanionService } from '../services/companion.service';
import { Companion } from '../models/companion';
import { isUndefined } from 'util';
import { map } from 'rxjs/operators';
import { NavbarService } from '../services/navbar.service';
import { EncryptionService } from '../services/encryption.service';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.css']
})
export class ClinicalHistoryComponent implements OnInit {
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
