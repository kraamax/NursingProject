import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalHistoryComponent } from './clinical-history.component';

describe('ClinicalHistoryComponent', () => {
  let component: ClinicalHistoryComponent;
  let fixture: ComponentFixture<ClinicalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
