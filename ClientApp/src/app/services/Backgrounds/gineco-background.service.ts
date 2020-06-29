import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GinecoBackground } from 'src/app/models/backgrounds/gineco-background';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  GinecoBackgroundService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }
  
  addGinecoBackground (ginecoBackground: GinecoBackground): Observable<GinecoBackground> {
    return this.http.post<GinecoBackground>(this.baseUrl+'api/ginecoBackground', ginecoBackground, httpOptions).pipe(
    tap((newGinecoBackground: GinecoBackground) => this.log(`Antecedente gineco obstretrico agregado  id=${newGinecoBackground.idGinecoBackground}`)),
    catchError(this.handleError<GinecoBackground>('addGinecoBackground'))
    );
      }
  getGinecoBackground(id: number): Observable<GinecoBackground>
  {
  const url = `${this.baseUrl + 'api/ginecoBackground'}/${id}`;
  return this.http.get<GinecoBackground>(url).pipe(
  tap(_ => console.log(`Antecedente gineco obstretrico consultado id=${id}`)),
  catchError(this.handleError<GinecoBackground>(`getGinecoBackground id=${id}`))
  );
  }
  getGinecoBackgroundByPaciente(idPaciente: string): Observable<GinecoBackground>
  {
  const url = `${this.baseUrl + 'api/ginecoBackground/paciente='}${idPaciente}`;
  return this.http.get<GinecoBackground>(url).pipe(
  tap(_ => console.log(`Antecedente gineco obstretrico consultado id=${idPaciente}`)),
  catchError(rest=>{
    return of(undefined);
  })
  );
  }
  update (ginecoBackground: GinecoBackground): Observable<any> {
    const url = `${this.baseUrl + 'api/ginecoBackground'}/${ginecoBackground.idGinecoBackground}`;
    return this.http.put(url, ginecoBackground, httpOptions).pipe(
    tap(_ => alert(`Antecedente gineco obstretrico actualizado id=${ginecoBackground.idGinecoBackground}`)),
    catchError(this.handleError<any>('Update'))
    );
    }
  delete (ginecoBackground: GinecoBackground | string): Observable<GinecoBackground> {
    const id = typeof ginecoBackground === 'string' ? ginecoBackground : ginecoBackground.idGinecoBackground;
    const url =  `${this.baseUrl + 'api/ginecoBackground'}/${id}`;
    return this.http.delete<GinecoBackground>(url, httpOptions).pipe(
    tap(_ => this.log(`Antecedente gineco obstretrico eliminado id=${id}`)),
    catchError(this.handleError<GinecoBackground>('delete'))
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