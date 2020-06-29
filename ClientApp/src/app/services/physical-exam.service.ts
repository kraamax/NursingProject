import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PhysicalExam } from '../models/physical-exam';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  PhysicalExamService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }
  
  addPhysicalExam (physicalExam: PhysicalExam): Observable<PhysicalExam> {
    return this.http.post<PhysicalExam>(this.baseUrl+'api/physicalExam', physicalExam, httpOptions).pipe(
    tap((newPhysicalExam: PhysicalExam) => this.log(`Revisión por sistema y Examen Físico agregados id=${newPhysicalExam.idPhysicalExam}`)),
    catchError(this.handleError<PhysicalExam>('addPhysicalExam'))
    );
      }
  getPhysicalExam(id: number): Observable<PhysicalExam>
  {
  const url = `${this.baseUrl + 'api/physicalExam'}/${id}`;
  return this.http.get<PhysicalExam>(url).pipe(
  tap(_ => console.log(`Revisión por sistema y Examen Físico consultados id=${id}`)),
  catchError(this.handleError<PhysicalExam>(`getPhysicalExam id=${id}`))
  );
  }
  getPhysicalExamByPaciente(idPaciente: string): Observable<PhysicalExam>
  {
  const url = `${this.baseUrl + 'api/physicalExam/paciente='}${idPaciente}`;
  return this.http.get<PhysicalExam>(url).pipe(
  tap(_ => console.log(`Revisión por sistema y Examen Físico consultados id=${idPaciente}`)),
  catchError(rest=>{
    return of(undefined);
  })
  );
  }
  update (physicalExam: PhysicalExam): Observable<any> {
    const url = `${this.baseUrl + 'api/physicalExam'}/${physicalExam.idPhysicalExam}`;
    return this.http.put(url, physicalExam, httpOptions).pipe(
    tap(_ => alert(`Revisión por sistema y Examen Físico actualizados id=${physicalExam.idPhysicalExam}`)),
    catchError(this.handleError<any>('Update'))
    );
    }
  delete (physicalExam: PhysicalExam | string): Observable<PhysicalExam> {
    const id = typeof physicalExam === 'string' ? physicalExam : physicalExam.idPhysicalExam;
    const url =  `${this.baseUrl + 'api/physicalExam'}/${id}`;
    return this.http.delete<PhysicalExam>(url, httpOptions).pipe(
    tap(_ => this.log(`Revisión por sistema y Examen Físico eliminados id=${id}`)),
    catchError(this.handleError<PhysicalExam>('delete'))
    );
    }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
    }
    private log(message: string) {
      /*var mesage =this.modalService.open(MensajeModalComponent);
      mesage.componentInstance.titulo="ClienteService:";
      mesage.componentInstance.body=` ${message}`;*/
      alert(message);
  }
}