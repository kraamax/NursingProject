import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRequestsListComponent } from './students-requests-list.component';

describe('StudentsRequestsListComponent', () => {
  let component: StudentsRequestsListComponent;
  let fixture: ComponentFixture<StudentsRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
