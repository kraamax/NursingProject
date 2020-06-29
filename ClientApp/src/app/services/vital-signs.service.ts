import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { VitalSigns } from '../models/vital-signs';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  VitalSignsService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }
  
  addVitalSigns (vitalSigns: VitalSigns): Observable<VitalSigns> {
    return this.http.post<VitalSigns>(this.baseUrl+'api/vitalSigns', vitalSigns, httpOptions).pipe(
    tap((newVitalSigns: VitalSigns) => this.log(`Signos vitales agregados id=${newVitalSigns.idVitalSigns}`)),
    catchError(this.handleError<VitalSigns>('addVitalSigns'))
    );
      }
  getVitalSigns(id: number): Observable<VitalSigns>
  {
  const url = `${this.baseUrl + 'api/vitalSigns'}/${id}`;
  return this.http.get<VitalSigns>(url).pipe(
  tap(_ => console.log(`Signos vitales consultados id=${id}`)),
  catchError(this.handleError<VitalSigns>(`getVitalSigns id=${id}`))
  );
  }
  getVitalSignsByPaciente(idPaciente: string): Observable<VitalSigns>
  {
  const url = `${this.baseUrl + 'api/vitalSigns/paciente='}${idPaciente}`;
  return this.http.get<VitalSigns>(url).pipe(
  tap(_ => console.log(`Signos vitales consultados id=${idPaciente}`)),
  catchError(rest=>{
    return of(undefined);
  })
  );
  }
  update (vitalSigns: VitalSigns): Observable<any> {
    const url = `${this.baseUrl + 'api/vitalSigns'}/${vitalSigns.idVitalSigns}`;
    return this.http.put(url, vitalSigns, httpOptions).pipe(
    tap(_ => alert(`Signos vitales actualizados id=${vitalSigns.idVitalSigns}`)),
    catchError(this.handleError<any>('Update'))
    );
    }
  delete (vitalSigns: VitalSigns | string): Observable<VitalSigns> {
    const id = typeof vitalSigns === 'string' ? vitalSigns : vitalSigns.idVitalSigns;
    const url =  `${this.baseUrl + 'api/vitalSigns'}/${id}`;
    return this.http.delete<VitalSigns>(url, httpOptions).pipe(
    tap(_ => this.log(`Signos vitales eliminados id=${id}`)),
    catchError(this.handleError<VitalSigns>('delete'))
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