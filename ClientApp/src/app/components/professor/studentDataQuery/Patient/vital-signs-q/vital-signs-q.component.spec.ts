import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalSignsQComponent } from './vital-signs-q.component';

describe('VitalSignsQComponent', () => {
  let component: VitalSignsQComponent;
  let fixture: ComponentFixture<VitalSignsQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalSignsQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalSignsQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
