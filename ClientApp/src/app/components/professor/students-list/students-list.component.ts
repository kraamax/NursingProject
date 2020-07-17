import { Component, OnInit } from '@angular/core';
import { StudentRequestService } from 'src/app/services/student-request.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { StudentRequest } from 'src/app/models/student-request';
import { Router, NavigationExtras } from '@angular/router';
import { EncryptionService } from 'src/app/services/encryption.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  acceptedStudents:StudentRequest[];
  constructor(
    private studentRequestService:StudentRequestService, 
    private NavbarService:NavbarService, 
    private userLoginService:UserLoginService,
    private router:Router,
    private encryptionService:EncryptionService) { }

  ngOnInit() {
    this.acceptedStudents=[];
    this.NavbarService.showNavBar();
    this.NavbarService.showSideBar();
    this.userLoginService.getLoggedUserProfile().subscribe((res:any)=>{
      this.studentRequestService.getAcceptedRequests(res.email).subscribe(res=>this.acceptedStudents=res);
    })
  }

  showPatients(id:string){
    var encrytedId=this.encryptionService.encrypt(id);
    this.router.navigate([`patientsByStudent`,encrytedId]);
  }
}
