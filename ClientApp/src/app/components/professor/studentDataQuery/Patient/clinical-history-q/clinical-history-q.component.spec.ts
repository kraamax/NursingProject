import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalHistoryQComponent } from './clinical-history-q.component';

describe('ClinicalHistoryQComponent', () => {
  let component: ClinicalHistoryQComponent;
  let fixture: ComponentFixture<ClinicalHistoryQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalHistoryQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalHistoryQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
