import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationUser } from 'src/app/models/application-user';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../admin/dialog/dialog.component';
import { ApplicationUserService } from 'src/app/services/application-user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  personalData:FormGroup;
  user:ApplicationUser;
  constructor(
    private formBuilder:FormBuilder, 
    private navBarService:NavbarService, 
    private userLoginService:UserLoginService,
    private dialog:MatDialog,
    private applicationUserService:ApplicationUserService,
    private toastr:ToastrService

    ) { }

  ngOnInit() {
    this.personalData = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      secondName: ['', [Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      secondLastName: ['', [Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      firstLastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z\u00C0-\u00FF ]+$')]],
      phone: ['', [Validators.required, Validators.min(0)]],
     
      identificacion: ['', [Validators.required, Validators.min(0)]],
      bornDate: ['', [Validators.required]],
      sex: ['', [Validators.required]],
   
    });
    this.personalData.disable();
    this.user=new ApplicationUser();
    this.navBarService.showNavBar();
    this.navBarService.showSideBar();
    this.userLoginService.getLoggedUserProfile().subscribe(res=>this.user=res);
  }
  toggleEdit(){
    if(this.personalData.enabled){
      this.personalData.disable();
    }else{
      this.personalData.enable();
    }
  }
  updateProfile(){
    this.applicationUserService.putApplicationUser(this.user).subscribe((res:any)=>{
      if(res.succeeded){
        this.toastr.success("Se han guardado los cambios","Operación realizada");
        this.toggleEdit();
      }else{
        this.toastr.error("Ha ocurrido algo inesperado","Operación fallida");
        console.log(res);
      }
    });
  }
  openDialogChangePassword(id:any,email:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {id, email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
