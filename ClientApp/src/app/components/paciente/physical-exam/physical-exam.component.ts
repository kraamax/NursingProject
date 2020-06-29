import { Component, OnInit, Input } from '@angular/core';
import { PhysicalExam } from 'src/app/models/physical-exam';
import { PhysicalExamService } from 'src/app/services/physical-exam.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-physical-exam',
  templateUrl: './physical-exam.component.html',
  styleUrls: ['./physical-exam.component.css']
})
export class PhysicalExamComponent implements OnInit {
  physicalExam:PhysicalExam;
  isEditable:boolean;
  isUndefinedExam:boolean;
  @Input() idPaciente:string;
  constructor(private physicalExamService:PhysicalExamService) { }

  ngOnInit() {
    this.isEditable=false;
    this.physicalExam=new PhysicalExam();
    this.getCurrentPhysicalExam();
  }
  getCurrentPhysicalExam(){
    this.physicalExamService.getPhysicalExamByPaciente(this.idPaciente).subscribe(rest=>{
      if(isUndefined(rest)){
        this.isUndefinedExam=true;
        this.isEditable=true;
      }else{
        this.isUndefinedExam=false;
        this.isEditable=false;
        this.physicalExam=rest;
      }
    });
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
  addPhysicalExam(){
    if(!isUndefined(this.isUndefinedExam)){
      if(this.isUndefinedExam){
        this.physicalExam.pacienteId=this.idPaciente;
        this.physicalExamService.addPhysicalExam(this.physicalExam).subscribe(rest=>this.getCurrentPhysicalExam());
      }else{
        this.physicalExamService.update(this.physicalExam).subscribe(rest=>this.getCurrentPhysicalExam());
      }
    }else{
      alert("Cargando registros...Intente de nuevo");
    }
  }
}
