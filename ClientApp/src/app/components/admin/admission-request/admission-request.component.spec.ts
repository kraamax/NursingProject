import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionRequestComponent } from './admission-request.component';

describe('AdmissionRequestComponent', () => {
  let component: AdmissionRequestComponent;
  let fixture: ComponentFixture<AdmissionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
