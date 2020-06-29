import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LifeStyle } from '../models/life-style';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  LifeStyleService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }
  
  addLifeStyle (lifeStyle: LifeStyle): Observable<LifeStyle> {
    return this.http.post<LifeStyle>(this.baseUrl+'api/lifeStyle', lifeStyle, httpOptions).pipe(
    tap((newLifeStyle: LifeStyle) => this.log(`Estilo de vida agregado  id=${newLifeStyle.idLifeStyle}`)),
    catchError(this.handleError<LifeStyle>('addLifeStyle'))
    );
      }
  getLifeStyle(id: number): Observable<LifeStyle>
  {
  const url = `${this.baseUrl + 'api/lifeStyle'}/${id}`;
  return this.http.get<LifeStyle>(url).pipe(
  tap(_ => console.log(`Estilo de vida consultado id=${id}`)),
  catchError(this.handleError<LifeStyle>(`getLifeStyle id=${id}`))
  );
  }
  getLifeStyleByPaciente(idPaciente: string): Observable<LifeStyle>
  {
  const url = `${this.baseUrl + 'api/lifeStyle/paciente='}${idPaciente}`;
  return this.http.get<LifeStyle>(url).pipe(
  tap(_ => console.log(`Estilo de vida consultado id=${idPaciente}`)),
  catchError(rest=>{
    return of(undefined);
  })
  );
  }
  update (lifeStyle: LifeStyle): Observable<any> {
    const url = `${this.baseUrl + 'api/lifeStyle'}/${lifeStyle.idLifeStyle}`;
    return this.http.put(url, lifeStyle, httpOptions).pipe(
    tap(_ => alert(`Estilo de vida actualizado id=${lifeStyle.idLifeStyle}`)),
    catchError(this.handleError<any>('Update'))
    );
    }
  delete (lifeStyle: LifeStyle | string): Observable<LifeStyle> {
    const id = typeof lifeStyle === 'string' ? lifeStyle : lifeStyle.idLifeStyle;
    const url =  `${this.baseUrl + 'api/lifeStyle'}/${id}`;
    return this.http.delete<LifeStyle>(url, httpOptions).pipe(
    tap(_ => this.log(`Estilo de vida eliminado id=${id}`)),
    catchError(this.handleError<LifeStyle>('delete'))
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