import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Companion } from '../models/companion';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  CompanionService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }

  addCompanion (companion: Companion): Observable<Companion> {
    return this.http.post<Companion>(this.baseUrl+'api/companion', companion, httpOptions).pipe(
    tap((newCompanion: Companion) => this.log(`Acompañante agregado  id=${newCompanion.idCompanion}`)),
    catchError(this.handleError<Companion>('addCompanion'))
    );
    }

  getCompanions(): Observable<Companion[]> {
    return this.http.get<Companion[]>(this.baseUrl + 'api/companion').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Companion[]>('getAll', []))
    );
}
getCompanion(id: string): Observable<Companion>
{
const url = `${this.baseUrl + 'api/companion'}/${id}`;
return this.http.get<Companion>(url).pipe(
tap(_ => console.log(`Acompañante consultado id=${id}`)),
catchError(this.handleError<Companion>(`getCompanion id=${id}`))
);
}
//paciente={idPaciente}
getCompanionByPaciente(idPaciente: string): Observable<Companion>
{
const url = `${this.baseUrl + 'api/companion/paciente='}${idPaciente}`;
return this.http.get<Companion>(url).pipe(
tap(_ => console.log(`Acompañante consultado id=${idPaciente}`)),
catchError(rest=>{
  return of(undefined);
})
);
}

update (companion: Companion): Observable<any> {
  const url = `${this.baseUrl + 'api/companion'}/${companion.idCompanion}`;
  return this.http.put(url, companion, httpOptions).pipe(
  tap(_ => alert(`Acompañante actualizado id=${companion.idCompanion}`)),
  catchError(this.handleError<any>('CompanionUpdate'))
  );
  }
  delete (companion: Companion | string): Observable<Companion> {
    const id = typeof companion === 'string' ? companion : companion.idCompanion;
    const url =  `${this.baseUrl + 'api/companion'}/${id}`;
    
    return this.http.delete<Companion>(url, httpOptions).pipe(
    tap(_ => this.log(`Acompañante eliminado id=${id}`)),
    catchError(this.handleError<Companion>('deleteCompanion'))
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