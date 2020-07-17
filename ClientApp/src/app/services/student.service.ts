import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from '../models/student';
import { ToastrService } from 'ngx-toastr';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  StudentService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,private toastr:ToastrService/*private modalService: NgbModal*/) { }

  addStudent (student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl+'api/student', student, httpOptions).pipe(
    tap(),
    catchError(this.handleErrorAddStudent<Student>('addCompanion'))
    );
    }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + 'api/student').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Student[]>('getAll', []))
    );
}
getStudent(id: string): Observable<Student>
{
const url = `${this.baseUrl + 'api/student'}/${id}`;
return this.http.get<Student>(url).pipe(
tap(_ => console.log(`Acompañante consultado id=${id}`)),
catchError(this.handleError<Student>(`getCompanion id=${id}`))
);
}

  update (student: Student): Observable<any> {
    const url = `${this.baseUrl + 'api/student'}/${student.idStudent}`;
    return this.http.put(url, student, httpOptions).pipe(
    tap(_ => alert(`Acompañante actualizado id=${student.idStudent}`)),
    catchError(this.handleError<any>('Update'))
    );
  }
  delete (student: Student | string): Observable<Student> {
    const id = typeof student === 'string' ? student : student.idStudent;
    const url =  `${this.baseUrl + 'api/student'}/${id}`;
    
    return this.http.delete<Student>(url, httpOptions).pipe(
    tap(_ => this.log(`Acompañante eliminado id=${id}`)),
    catchError(this.handleError<Student>('delete'))
    );
    }
    private handleErrorAddStudent<T> (operation = 'operation', result?: T) {
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