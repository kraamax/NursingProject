import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { StudentRequestService } from 'src/app/services/student-request.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { StudentRequest } from 'src/app/models/student-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students-requests-list',
  templateUrl: './students-requests-list.component.html',
  styleUrls: ['./students-requests-list.component.css']
})
export class StudentsRequestsListComponent implements OnInit {
  studentsRequests:StudentRequest[];
  email:string;
  constructor(
    private userLoginService:UserLoginService,
    private studentRequestService:StudentRequestService,
    private navBarService:NavbarService,
    private toastService:ToastrService
     ) { }

  ngOnInit() {
    this.navBarService.showNavBar();
    this.navBarService.showSideBar();
    this.studentsRequests=[];
    this.userLoginService.getLoggedUserProfile().subscribe((res:any)=>{
      this.email=res.email;
      this.getStudentsRequests(res.email);
    })
  }
  getStudentsRequests(email:string){
    this.studentRequestService.getRequests(email).subscribe(res=>this.studentsRequests=res);
  }
  accept(idReqest:any){
    this.studentRequestService.AcceptRequest(idReqest).subscribe(res=>this.getStudentsRequests(this.email));
  }
  delete(idRequest:any){
    var confirmation=confirm("¿Está seguro que desea eliminar la solicitud?");
    if(confirmation){
      this.studentRequestService.DeleteRequest(idRequest).subscribe(res=>this.getStudentsRequests(this.email));
    }
  }
}
