import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { ActivatedRoute } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
  selector: 'app-patients-by-student-list',
  templateUrl: './patients-by-student-list.component.html',
  styleUrls: ['./patients-by-student-list.component.css']
})
export class PatientsByStudentListComponent implements OnInit {
  pacientes:Paciente[];
  idUser:string
  constructor(
    private navbarService:NavbarService, 
    private pacienteService: PacienteService,
    private route:ActivatedRoute,
    private encryptionService:EncryptionService
    ) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.pacientes=[];
    this.getUserId();    
    this.getPacientes();
  }
  getUserId(){
    var id=this.route.snapshot.paramMap.get("idUser");
    this.idUser=this.encryptionService.decrypt(id)
  }
  getPacientes(){
    this.pacienteService.getPacientesByNurse(this.idUser).subscribe(pacientes=>{
      this.pacientes=pacientes;
      console.log(this.idUser);
    });
  }
}
