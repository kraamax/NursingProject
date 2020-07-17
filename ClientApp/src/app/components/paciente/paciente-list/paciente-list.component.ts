import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { DataParametersService } from 'src/app/services/data-parameters.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
pacientes:Paciente[];

  constructor(
    private pacienteService:PacienteService, 
    private navbarService:NavbarService,
    private dataParametersService:DataParametersService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();
    this.pacientes=[];
    this.getPacientes();
    this.route.queryParams.subscribe(params=>console.log(params));
  }
  getPacientes(){
    this.pacienteService.getPacientes().subscribe(pacientes=>this.pacientes=pacientes);
  }
  /*goToClinicHistory(idPaciente:any){
    this.router.navigateByUrl("/clinicHistory");
    this.dataParametersService.setIdPatient(idPaciente);
  }*/
}
