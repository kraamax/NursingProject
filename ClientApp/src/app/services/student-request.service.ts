import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ApplicationUser } from '../models/application-user';
import { StudentRequest } from '../models/student-request';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  StudentRequestService {
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private toastr:ToastrService) { }
  sendRequest(request: StudentRequest): Observable<StudentRequest> {
      return this.http.post<any>(this.baseUrl + 'api/StudentRequest/PostStudentRequest/Register', request, httpOptions);
    }
  getRequests(email:string):Observable<StudentRequest[]>{
     return this.http.get<StudentRequest[]>(this.baseUrl + `api/StudentRequest/GetStudentsRequestsByProfessor/${email}`, httpOptions);
  }
  AcceptRequest(idRequest:number):Observable<StudentRequest[]>{
    return this.http.put<StudentRequest[]>(this.baseUrl + `api/studentRequest/AcceptStudentRequest/${idRequest}`, httpOptions);
  }
  DeleteRequest(idRequest:number):Observable<StudentRequest[]>{
  return this.http.delete<StudentRequest[]>(this.baseUrl + `api/studentRequest/DeleteRequest/${idRequest}`, httpOptions);
  }
getAcceptedRequests(email:string){
  return this.http.get<StudentRequest[]>(this.baseUrl + `api/StudentRequest/GetStudentAcceptedByProfessor/Accepted/${email}`, httpOptions);
}

 
  private handleErrorAddUser<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      if(error.status==400) this.toastr.error("La identificación registrada ya existe",`El registro falló`);
      else this.log(`${operation} failed: ${error.error}`);
      return of(result as T);
    };
  }
  private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.error}`);
        return of(result as T);
      };
    }
    private log(message: string) {
      alert(message);
  }
}
