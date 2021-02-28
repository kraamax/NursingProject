import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthropometricsMeasuresQComponent } from './anthropometrics-measures-q.component';

describe('AnthropometricsMeasuresQComponent', () => {
  let component: AnthropometricsMeasuresQComponent;
  let fixture: ComponentFixture<AnthropometricsMeasuresQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnthropometricsMeasuresQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthropometricsMeasuresQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
