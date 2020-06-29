import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { Account } from 'src/app/models/account';
import { Location } from '@angular/common';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-students',
  templateUrl: './sign-up-students.component.html',
  styleUrls: ['./sign-up-students.component.css']
})
export class SignUpStudentsComponent implements OnInit {

  userForm:FormGroup;
  student:Student;
  constructor(private formBuilder: FormBuilder, private location:Location, private studentService:StudentService, private router:Router) { }
  ngOnInit() {
    this.student=new Student();
    this.student.sex="";
    this.student.account=new Account();
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      secondName: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      secondLastName: ['', [Validators.pattern('^[a-zA-Z]+$')]],
      firstLastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      bornDate: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      locationBiannual: ['', [Validators.required]]
    });
  }
 

  goBack(){
    this.location.back();
  }
  goToLogin(){
    this.router.navigate(["/login"]);
  }
  addStudent(){
    this.student.idStudent=(document.getElementById("identificacion") as HTMLInputElement).value;
    this.student.email=(document.getElementById("email") as HTMLInputElement).value;
    this.student.account.user=this.student.email;
    this.student.account.activated=false;
    this.studentService.addStudent(this.student).subscribe(rest=>console.log(this.student));
  }

  onSubmit(){
    if(this.userForm.valid){
      alert('User form is valid!!')
      console.log(  this.userForm.get("email2").value);
    } else {
      alert('User form is not valid!!')
    }
  }
}
