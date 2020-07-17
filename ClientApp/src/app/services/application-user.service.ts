import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ApplicationUser } from '../models/application-user';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  ApplicationUserService {
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private toastr:ToastrService/*private modalService: NgbModal*/) { }
  addUser(user: ApplicationUser): Observable<ApplicationUser> {
      return this.http.post<any>(this.baseUrl + 'api/applicationUser/Register', user, httpOptions).pipe(
        tap(),
        catchError(this.handleErrorAddUser<any>('addUser'))
      );
    }
  getApplicationUsers():Observable<ApplicationUser[]>{
     return this.http.get<ApplicationUser[]>(this.baseUrl + 'api/applicationUser', httpOptions);
  }
  putApplicationUser(user:ApplicationUser):Observable<ApplicationUser>{
    return this.http.post<ApplicationUser>(this.baseUrl + 'api/applicationUser/Admit',user, httpOptions).pipe(tap(), 
     catchError(this.handleError<any>('update')));
  }
  changePassword(user:ApplicationUser):Observable<ApplicationUser>{
    return this.http.put<ApplicationUser>(this.baseUrl + 'api/applicationUser/ChangePassword',user, httpOptions).pipe(tap(), 
     catchError(this.handleError<any>('update')));
  }
 
  private handleErrorAddUser<T> (operation = 'operation', result?: T) {
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
    private log(message: string) {
      alert(message);
  }
}
