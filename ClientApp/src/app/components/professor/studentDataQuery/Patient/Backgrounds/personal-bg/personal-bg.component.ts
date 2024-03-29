import { Component, OnInit, Input } from '@angular/core';
import { PersonalBackground } from 'src/app/models/backgrounds/personal-background';
import { PersonalBackgroundService } from 'src/app/services/Backgrounds/personal-background.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-personal-bg',
  templateUrl: './personal-bg.component.html',
  styleUrls: ['./personal-bg.component.css']
})
export class PersonalBGComponent implements OnInit {
  numbers:number[];
  i:number;
  @Input() idPaciente:string;
  personalBackground:PersonalBackground;
  isUndefinedBackground:boolean;
  isEditable:boolean;
  constructor(private personalBackgroundService:PersonalBackgroundService) {
   }

  ngOnInit() {
    this.personalBackground=new PersonalBackground();
    this.isEditable=false;
    this.getCurrentPersonalBackground();
  }
  getCurrentPersonalBackground(){
    this.personalBackgroundService.getPersonalBackgroundByPaciente(this.idPaciente).subscribe(rest=>{
      if(isUndefined(rest)){
        this.isUndefinedBackground=true;
        this.personalBackground=new PersonalBackground();
        this.isEditable=true;
      }else{
        this.isUndefinedBackground=false;
        this.personalBackground=rest;
        this.isEditable=false;
      }
    })
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
  addPersonalBackground(){
    if(this.isUndefinedBackground){
    this.personalBackground.pacienteId=this.idPaciente;
    this.personalBackgroundService.addPersonalBackground(this.personalBackground).subscribe(rest=>this.getCurrentPersonalBackground()); 
    }else{
      this.personalBackgroundService.update(this.personalBackground).subscribe(rest=>this.getCurrentPersonalBackground());
    }   
  }
}
