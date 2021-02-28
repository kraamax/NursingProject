import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentRequestService } from 'src/app/services/student-request.service';
import { StudentRequest } from 'src/app/models/student-request';
import { UserLoginService } from 'src/app/services/user-login.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-send-request-dialog',
  templateUrl: './send-request-dialog.component.html',
  styleUrls: ['./send-request-dialog.component.css']
})
export class SendRequestDialogComponent implements OnInit {
  sendRequestForm:FormGroup;
  request:StudentRequest;
  constructor(
    private UserLoginService:UserLoginService,
    private studentRequestService:StudentRequestService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService,
    public dialogRef: MatDialogRef<SendRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.request = new StudentRequest();
    this.sendRequestForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  sendRequest(){
    this.UserLoginService.getLoggedUserProfile().subscribe((res:any)=>{
      this.request.emissorEmail=res.email;
      this.request.emissorId=res.id;
      this.request.emissorLastNames=res.firstLastName+" "+res.secondLastName;
      this.request.emissorNames=res.firstName;
      this.request.isAccepted=false;
      this.request.emissorPhoneNumber=res.phoneNumber;
      this.request.emissorLocationBiannual=res.locationBiannual;
      this.request.date=new Date().toLocaleDateString();
      this.studentRequestService.sendRequest(this.request).subscribe((res:any)=>{
        if(!isUndefined(res.error)){
          this.toastr.info(res.error.message);
        }
        if(res.statusCode==200){
          this.toastr.success("Se han enviado la solicitud","Operación Realizada");
        }
      });
    });
    
  }

}
