import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PersonalBackground } from 'src/app/models/backgrounds/personal-background';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  PersonalBackgroundService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }
  
  addPersonalBackground (personalBackground: PersonalBackground): Observable<PersonalBackground> {
    return this.http.post<PersonalBackground>(this.baseUrl+'api/personalBackground', personalBackground, httpOptions).pipe(
    tap((newPersonalBackground: PersonalBackground) => this.log(`Antecedente personal agregado  id=${newPersonalBackground.idPersonalBackground}`)),
    catchError(this.handleError<PersonalBackground>('addPersonalBackground'))
    );
      }
  getPersonalBackground(id: number): Observable<PersonalBackground>
  {
  const url = `${this.baseUrl + 'api/personalBackground'}/${id}`;
  return this.http.get<PersonalBackground>(url).pipe(
  tap(_ => console.log(`Antecedente personal consultado id=${id}`)),
  catchError(this.handleError<PersonalBackground>(`getPersonalBackground id=${id}`))
  );
  }
  getPersonalBackgroundByPaciente(idPaciente: string): Observable<PersonalBackground>
  {
  const url = `${this.baseUrl + 'api/personalBackground/paciente='}${idPaciente}`;
  return this.http.get<PersonalBackground>(url).pipe(
  tap(_ => console.log(`Antecedente personal consultado id=${idPaciente}`)),
  catchError(rest=>{
    return of(undefined);
  })
  );
  }
  update (personalBackground: PersonalBackground): Observable<any> {
    const url = `${this.baseUrl + 'api/personalBackground'}/${personalBackground.idPersonalBackground}`;
    return this.http.put(url, personalBackground, httpOptions).pipe(
    tap(_ => alert(`Antecedente personal actualizado id=${personalBackground.idPersonalBackground}`)),
    catchError(this.handleError<any>('Update'))
    );
    }
  delete (personalBackground: PersonalBackground | string): Observable<PersonalBackground> {
    const id = typeof personalBackground === 'string' ? personalBackground : personalBackground.idPersonalBackground;
    const url =  `${this.baseUrl + 'api/personalBackground'}/${id}`;
    return this.http.delete<PersonalBackground>(url, httpOptions).pipe(
    tap(_ => this.log(`Antecedente personal eliminado id=${id}`)),
    catchError(this.handleError<PersonalBackground>('delete'))
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