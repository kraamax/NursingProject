import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListForFollowUpComponent } from './patient-list-for-follow-up.component';

describe('PatientListForFollowUpComponent', () => {
  let component: PatientListForFollowUpComponent;
  let fixture: ComponentFixture<PatientListForFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListForFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListForFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
