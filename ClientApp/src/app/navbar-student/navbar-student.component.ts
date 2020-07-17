import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.css']
})
export class NavbarStudentComponent implements OnInit {
  isExpanded=false;
  constructor() { }

  ngOnInit() {
  }
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }
}