import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalExamQComponent } from './physical-exam-q.component';

describe('PhysicalExamQComponent', () => {
  let component: PhysicalExamQComponent;
  let fixture: ComponentFixture<PhysicalExamQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalExamQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalExamQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
