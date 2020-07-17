import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Docente } from '../models/docente';
import { ToastrService } from 'ngx-toastr';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  DocenteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private toastr:ToastrService/*private modalService: NgbModal*/) { }

  addDocente(docente: any): Observable<any> {
      return this.http.post<any>(this.baseUrl + 'api/docente', docente, httpOptions).pipe(
        tap(),
        catchError(this.handleErrorAddDocente<any>('addDocente'))
      );
    }

  getDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/docente').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Docente[]>('getAll', []))
    );
  }
  getDocente(id: string): Observable<Docente>
  {
    const url = `${this.baseUrl + 'api/docente'}/${id}`;
    return this.http.get<Docente>(url).pipe(
      tap(_ => console.log(`Docente consultado id=${id}`)),
      catchError(this.handleError<Docente>(`getDocente id=${id}`))
    );
  }

  update (docente: Docente): Observable<any> {
    const url = `${this.baseUrl + 'api/docente'}/${docente.idDocente}`;
    return this.http.put(url, docente, httpOptions).pipe(
      tap(_ => alert(`Docente actualizado id=${docente.idDocente}`)),
      catchError(this.handleError<any>('Update'))
    );
  }
  delete (docente: Docente | string): Observable<Docente> {
    const id = typeof docente === 'string' ? docente : docente.idDocente;
    const url =  `${this.baseUrl + 'api/docente'}/${id}`;
    return this.http.delete<Docente>(url, httpOptions).pipe(
      tap(_ => this.log(`Docente eliminado id=${id}`)),
      catchError(this.handleError<Docente>('delete'))
    );
    }
  private handleErrorAddDocente<T> (operation = 'operation', result?: T) {
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
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      /*var mesage =this.modalService.open(MensajeModalComponent);
      mesage.componentInstance.titulo="ClienteService:";
      mesage.componentInstance.body=` ${message}`;*/
      alert(message);
  }
}
