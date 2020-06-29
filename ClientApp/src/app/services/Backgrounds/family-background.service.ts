import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FamilyBackground } from 'src/app/models/backgrounds/family-background';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  FamilyBackgroundService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,/*private modalService: NgbModal*/) { }
  
  addFamilyBackground (familyBackground: FamilyBackground): Observable<FamilyBackground> {
    return this.http.post<FamilyBackground>(this.baseUrl+'api/familyBackground', familyBackground, httpOptions).pipe(
    tap((newfamilyBackground: FamilyBackground) => this.log(`Antecedente familiar agregado  id=${newfamilyBackground.idFamilyBackground}`)),
    catchError(this.handleError<FamilyBackground>('addFamilyBackground'))
    );
      }
  getFamilyBackground(id: number): Observable<FamilyBackground>
  {
  const url = `${this.baseUrl + 'api/familyBackground'}/${id}`;
  return this.http.get<FamilyBackground>(url).pipe(
  tap(_ => console.log(`Antecedente familiar consultado id=${id}`)),
  catchError(this.handleError<FamilyBackground>(`getFamilyBackground id=${id}`))
  );
  }
  getFamilyBackgroundByPaciente(idPaciente: string): Observable<FamilyBackground>
  {
  const url = `${this.baseUrl + 'api/familyBackground/paciente='}${idPaciente}`;
  return this.http.get<FamilyBackground>(url).pipe(
  tap(_ => console.log(`Antecedente familiar consultado id=${idPaciente}`)),
  catchError(rest=>{
    return of(undefined);
  })
  );
  }
  update (familyBackground: FamilyBackground): Observable<any> {
    const url = `${this.baseUrl + 'api/familyBackground'}/${familyBackground.idFamilyBackground}`;
    return this.http.put(url, familyBackground, httpOptions).pipe(
    tap(_ => alert(`Antecedente familiar actualizado id=${familyBackground.idFamilyBackground}`)),
    catchError(this.handleError<any>('Update'))
    );
    }
  delete (familyBackground: FamilyBackground | string): Observable<FamilyBackground> {
    const id = typeof familyBackground === 'string' ? familyBackground : familyBackground.idFamilyBackground;
    const url =  `${this.baseUrl + 'api/familyBackground'}/${id}`;
    return this.http.delete<FamilyBackground>(url, httpOptions).pipe(
    tap(_ => this.log(`Antecedente familiar eliminado id=${id}`)),
    catchError(this.handleError<FamilyBackground>('delete'))
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