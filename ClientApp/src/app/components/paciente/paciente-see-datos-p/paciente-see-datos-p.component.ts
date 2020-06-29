import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-see-datos-p',
  templateUrl: './paciente-see-datos-p.component.html',
  styleUrls: ['./paciente-see-datos-p.component.css']
})
export class PacienteSeeDatosPComponent implements OnInit {
 @Input() paciente:Paciente;
 isEditable:boolean;
  constructor(private pacienteService:PacienteService) { }

  ngOnInit() {
    this.isEditable=false;
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
updatePaciente(){
  this.pacienteService.update(this.paciente).subscribe(rest=>this.toggleEdit());
}

}
