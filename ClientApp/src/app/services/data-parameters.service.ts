import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataParametersService {
  idPatient:string;
  constructor() { }
  setIdPatient(value:string){
    this.idPatient=value;
  }
  getIdPatient():string{
    return this.idPatient
  }
}
