import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsByStudentListComponent } from './patients-by-student-list.component';

describe('PatientsByStudentListComponent', () => {
  let component: PatientsByStudentListComponent;
  let fixture: ComponentFixture<PatientsByStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsByStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsByStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
