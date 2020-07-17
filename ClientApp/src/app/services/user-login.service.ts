import { Injectable,Inject } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Docente } from '../models/docente';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../Components/login/login.component';
import { LoginModel } from '../models/login-model';
import { ApplicationUser } from '../models/application-user';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { MensajeModalComponent } from '../mensaje-modal/mensaje-modal.component';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class  UserLoginService {
  isAdmin = new BehaviorSubject<boolean>(false);
  isProfessor_Student = new BehaviorSubject<boolean>(false);
  isPatient = new BehaviorSubject<boolean>(false);
  currentRole=new Subject<string>();
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string, private toastr:ToastrService) { 
    this.currentRole.next("");

  }
  loginUser(loginModel: LoginModel): Observable<LoginModel> 
  {
      return this.http.post<LoginModel>(this.baseUrl + 'api/ApplicationUser/Login', loginModel, httpOptions);
  }
  getLoggedUserProfile(): Observable<ApplicationUser[]> 
  {
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.get<ApplicationUser[]>(this.baseUrl + 'api/UserProfile', {headers:tokenHeader});
  }
  setToken(token:any)
  {
    localStorage.setItem('token',token);
  }
  ClearLocalStorage()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
  getRol(){
   this.currentRole.next(localStorage.getItem('role'));
  }
  update (docente: Docente): Observable<any> 
  {
    const url = `${this.baseUrl + 'api/docente'}/${docente.idDocente}`;
    return this.http.put(url, docente, httpOptions).pipe(
      tap(_ => alert(`Docente actualizado id=${docente.idDocente}`)),
      catchError(this.handleError<any>('Update'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) 
  {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.error}`);
        return of(result as T);
      };
  }
  private log(message: string) 
  {
      this.toastr.error(message);
  }
}
