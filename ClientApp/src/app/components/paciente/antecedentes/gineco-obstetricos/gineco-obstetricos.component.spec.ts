import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinecoObstetricosComponent } from './gineco-obstetricos.component';

describe('GinecoObstetricosComponent', () => {
  let component: GinecoObstetricosComponent;
  let fixture: ComponentFixture<GinecoObstetricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinecoObstetricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinecoObstetricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
