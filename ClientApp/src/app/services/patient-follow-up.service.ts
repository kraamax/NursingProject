import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { PatientFollowUp } from '../models/patient-follow-up';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})

export class PatientFollowUpService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private toastr:ToastrService) { }
  addFollowUp(followUp:PatientFollowUp):Observable<PatientFollowUp>{
      return this.http.post<PatientFollowUp>(this.baseUrl + 'api/PatientFollowUp', followUp, httpOptions);
  }
  GetFollowUps(idPatient:string):Observable<PatientFollowUp[]>{
    return this.http.get<PatientFollowUp[]>(this.baseUrl + 'api/PatientFollowUp/'+idPatient, httpOptions);
  }
  getFollowUp(idFollowUp:number):Observable<PatientFollowUp>{
    return this.http.get<PatientFollowUp>(this.baseUrl + 'api/PatientFollowUp/followUp='+idFollowUp, httpOptions);
  }
}
