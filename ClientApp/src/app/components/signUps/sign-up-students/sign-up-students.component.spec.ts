import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpStudentsComponent } from './sign-up-students.component';

describe('SignUpStudentsComponent', () => {
  let component: SignUpStudentsComponent;
  let fixture: ComponentFixture<SignUpStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
