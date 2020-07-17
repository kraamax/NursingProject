import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Paciente } from '../models/paciente';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  PacienteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }

  addPaciente (paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl+'api/paciente', paciente, httpOptions).pipe(
    tap((newPaciente: Paciente) => this.log(`Nueva Paciente agregado  id=${newPaciente.idPaciente}`)),
    catchError(this.handleError<Paciente>('addPaciente'))
    );
    }
  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.baseUrl + 'api/paciente').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Paciente[]>('getAll', []))
    );
  }
  getPaciente(id: string): Observable<Paciente>
  {
    const url = `${this.baseUrl + 'api/paciente'}/${id}`;
    return this.http.get<Paciente>(url).pipe(
    tap(_ => console.log(`Paciente consultado id=${id}`)),
    catchError(this.handleError<Paciente>(`getPaciente id=${id}`))
    );
  }
  getPacientesByNurse(responsibleNurseId:string):Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.baseUrl+'api/paciente/responsibleNurse='+responsibleNurseId).pipe(
    tap(),
    catchError(this.handleError<Paciente[]>(`getPatientsByNurse id=${responsibleNurseId}`))
    );
  }
  update (paciente: Paciente): Observable<any> {
    const url = `${this.baseUrl + 'api/paciente'}/${paciente.idPaciente}`;
    return this.http.put(url, paciente, httpOptions).pipe(
    tap(_ => alert(`Paciente actualizado id=${paciente.idPaciente}`)),
    catchError(this.handleError<any>('PacienteUpdate'))
    );
  }
  delete (paciente: Paciente | string): Observable<Paciente> {
    const id = typeof paciente === 'string' ? paciente : paciente.idPaciente;
    const url =  `${this.baseUrl + 'api/Paciente'}/${id}`;
    
    return this.http.delete<Paciente>(url, httpOptions).pipe(
    tap(_ => this.log(`Paciente eliminado id=${id}`)),
    catchError(this.handleError<Paciente>('deletePaciente'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      /*var mesage =this.modalService.open(MensajeModalComponent);
      mesage.componentInstance.titulo="ClienteService:";
      mesage.componentInstance.body=` ${message}`;*/
      alert(message);
  }
}