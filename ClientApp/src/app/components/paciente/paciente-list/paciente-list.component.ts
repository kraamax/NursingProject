import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
pacientes:Paciente[];

  constructor(private pacienteService:PacienteService, private navbarService:NavbarService) { }

  ngOnInit() {
    this.navbarService.showNavBar();
    this.navbarService.showSideBar();

    this.pacientes=[];
    this.getPacientes();
  }
  getPacientes(){
    this.pacienteService.getPacientes().subscribe(pacientes=>this.pacientes=pacientes);
  }
}
