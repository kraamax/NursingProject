import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AnthropometricMeasures } from '../models/anthropometric-measures';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  AnthropometricMeasuresService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }
  
  addAnthropometricMeasures (anthropometricMeasures: AnthropometricMeasures): Observable<AnthropometricMeasures> {
    return this.http.post<AnthropometricMeasures>(this.baseUrl+'api/anthropometricMeasures', anthropometricMeasures, httpOptions).pipe(
    tap((newAnthropometricMeasures: AnthropometricMeasures) => this.log(`Medidas Antropometrícas agregadas id=${newAnthropometricMeasures.idAnthropometricMeasures}`)),
    catchError(this.handleError<AnthropometricMeasures>('addAnthropometricMeasures'))
    );
      }
  getAnthropometricMeasures(id: number): Observable<AnthropometricMeasures>
  {
  const url = `${this.baseUrl + 'api/anthropometricMeasures'}/${id}`;
  return this.http.get<AnthropometricMeasures>(url).pipe(
  tap(_ => console.log(`Medidas Antropometrícas consultadas id=${id}`)),
  catchError(this.handleError<AnthropometricMeasures>(`getAnthropometricMeasures id=${id}`))
  );
  }
  getAnthropometricMeasuresByPaciente(idPaciente: string): Observable<AnthropometricMeasures>
  {
  const url = `${this.baseUrl + 'api/anthropometricMeasures/paciente='}${idPaciente}`;
  return this.http.get<AnthropometricMeasures>(url).pipe(
  tap(_ => console.log(`Medidas Antropometrícas consultadas id=${idPaciente}`)),
  catchError(rest=>{
    return of(undefined);
  })
  );
  }
  update (anthropometricMeasures: AnthropometricMeasures): Observable<any> {
    const url = `${this.baseUrl + 'api/anthropometricMeasures'}/${anthropometricMeasures.idAnthropometricMeasures}`;
    return this.http.put(url, anthropometricMeasures, httpOptions).pipe(
    tap(_ => alert(`Medidas Antropometrícas actualizadas id=${anthropometricMeasures.idAnthropometricMeasures}`)),
    catchError(this.handleError<any>('Update'))
    );
    }
  delete (anthropometricMeasures: AnthropometricMeasures | string): Observable<AnthropometricMeasures> {
    const id = typeof anthropometricMeasures === 'string' ? anthropometricMeasures : anthropometricMeasures.idAnthropometricMeasures;
    const url =  `${this.baseUrl + 'api/anthropometricMeasures'}/${id}`;
    return this.http.delete<AnthropometricMeasures>(url, httpOptions).pipe(
    tap(_ => this.log(`Medidas Antropometrícas eliminadas id=${id}`)),
    catchError(this.handleError<AnthropometricMeasures>('delete'))
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