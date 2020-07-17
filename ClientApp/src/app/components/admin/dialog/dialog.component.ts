import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApplicationUserService } from 'src/app/services/application-user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  changePasswordForm:FormGroup;
  
  constructor(
    private applicationUserService:ApplicationUserService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
  }
  ngOnInit(){
    this.changePasswordForm=this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  changePassword(){
    console.log(this.data);
    this.applicationUserService.changePassword(this.data).subscribe((res:any)=>{
      if(res.succeeded){
        this.toastr.success("Se ha cambiado la contraseña", "Operación Realizada")
      }else{
        this.toastr.error("Ha ocurrido algo","Operación fallida");
      }
    });
  }

}
