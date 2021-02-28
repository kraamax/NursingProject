import { Component, OnInit, Input } from '@angular/core';
import { LifeStyle } from 'src/app/models/life-style';
import { LifeStyleService } from 'src/app/services/life-style.service';
import { Habit } from 'src/app/models/habit';
import { isUndefined } from 'util';

@Component({
  selector: 'app-life-style',
  templateUrl: './life-style.component.html',
  styleUrls: ['./life-style.component.css']
})
export class LifeStyleComponent implements OnInit {
  @Input() idPaciente:string;
  lifeStyle:LifeStyle;
  isUndefinedBackground:boolean;
  isEditable:boolean;
  constructor(private lifeStyleService:LifeStyleService) {
   }
  

  ngOnInit() {
    this.isEditable=false;
    this.initilizeLifeStyle();
    this.getCurrentLifeStyle();
  
  }
initilizeLifeStyle(){
  this.lifeStyle=new LifeStyle();
  this.lifeStyle.nutricionalHabit=new Habit();
  this.lifeStyle.nociveHabit=new Habit();
  this.lifeStyle.leisure=new Habit();
  this.lifeStyle.excercise=new Habit();
  this.lifeStyle.hygienicHabit=new Habit();
  this.lifeStyle.rest=new Habit();
  this.lifeStyle.nutricionalHabit.rating="";
  this.lifeStyle.nociveHabit.rating="";
  this.lifeStyle.leisure.rating="";
  this.lifeStyle.excercise.rating="";
  this.lifeStyle.hygienicHabit.rating="";
  this.lifeStyle.rest.rating="";
}

getCurrentLifeStyle(){
  console.log(this.idPaciente);
  this.lifeStyleService.getLifeStyleByPaciente(this.idPaciente).subscribe(rest=>{
    if(isUndefined(rest)){
        this.isUndefinedBackground=true;
        this.isEditable=true;
    }else{
      this.isUndefinedBackground=false;
      this.lifeStyle=rest;
      this.isEditable=false;
    }
  })
}
toggleEdit(){
  this.isEditable=!this.isEditable;
}
addLifeStyle(){
  if(!isUndefined(this.isUndefinedBackground)){
      if(this.isUndefinedBackground){
        this.lifeStyle.pacienteId=this.idPaciente;
        this.lifeStyleService.addLifeStyle(this.lifeStyle).subscribe(rest=>{
          this.getCurrentLifeStyle();
        });
      }else{
        console.log(this.lifeStyle);
        this.lifeStyleService.update(this.lifeStyle).subscribe(rest=>this.getCurrentLifeStyle());
      }
  }else{
    alert("Cargando registros...Intente de nuevo");
  }
}
}
