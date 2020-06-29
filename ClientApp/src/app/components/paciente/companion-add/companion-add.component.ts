import { Component, OnInit, Input } from "@angular/core";
import { Companion } from "src/app/models/companion";
import { Paciente } from "src/app/models/paciente";
import { CompanionService } from "src/app/services/companion.service";
import { isUndefined } from "util";

@Component({
  selector: "app-companion-add",
  templateUrl: "./companion-add.component.html",
  styleUrls: ["./companion-add.component.css"]
})
export class CompanionAddComponent implements OnInit {
  @Input() idPaciente: string;
  @Input() companion: Companion;
  @Input() companionIsUndefined: boolean;
  wasUndefined: boolean;
  isReadOnly: boolean;
  isEditable:boolean;
  constructor(private companionService: CompanionService) {}
  ngOnChanges() {
    if (this.companionIsUndefined) {
      this.isReadOnly = false;
      this.wasUndefined = true;
      this.isEditable=true;
    } else {
      this.isReadOnly = true;
      this.wasUndefined = false;
      this.isEditable=false;
    }
  }
  ngOnInit() {
    this.companion = new Companion();
    this.isEditable=false;
  }
  toggleEdit(){
    this.isEditable=!this.isEditable;
  }
  saveCompanion() {
    if (!isUndefined(this.wasUndefined)) {
      if (this.wasUndefined) {
        this.companion.idCompanion = (document.getElementById(
          "identificacion"
        ) as HTMLInputElement).value;
        this.companion.pacienteId = this.idPaciente;
        this.companionService.addCompanion(this.companion).subscribe(rest=>{
          this.isReadOnly=true;
          this.wasUndefined=false;
          this.isEditable=false;
        });
        console.log(this.companion);
      } else {
        this.companionService.update(this.companion).subscribe(
          rest=>{this.isEditable=false;}
        );
      }
    }
  }
}
