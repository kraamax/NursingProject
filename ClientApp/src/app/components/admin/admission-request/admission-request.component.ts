import { Component, OnInit } from '@angular/core';
import { ApplicationUserService } from 'src/app/services/application-user.service';
import { ApplicationUser } from 'src/app/models/application-user';
import { NavbarService } from 'src/app/services/navbar.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-admission-request',
  templateUrl: './admission-request.component.html',
  styleUrls: ['./admission-request.component.css']
})
export class AdmissionRequestComponent implements OnInit {
  animal: string;
  name: string;
  users:ApplicationUser[];
  isEnable:boolean;
  constructor(private applicationUserService:ApplicationUserService, private navService:NavbarService, 
    private toastr:ToastrService,
    private dialog:MatDialog) { }
 
  ngOnInit() {
    this.users=[];
    this.navService.showNavBar();
    this.navService.showSideBar();
    this.applicationUserService.getApplicationUsers().subscribe(res=>{this.users=res;
      console.log(res);
    });
  }
  onChange(user:ApplicationUser){
    this.applicationUserService.putApplicationUser(user).subscribe((res:any)=>
    {
      if(res.succeeded==true){
        this.toastr.success("Se ha actualizado con éxito", "Operación realizada")
      }else{
        this.toastr.error("algo ha ocurrido");
      }
    })
  }
  openDialog(id:any,email:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {id, email}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ver(user:any){
    console.log(user.isEnable);
  }

}
