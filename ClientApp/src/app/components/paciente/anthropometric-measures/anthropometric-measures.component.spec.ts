import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthropometricMeasuresComponent } from './anthropometric-measures.component';

describe('AnthropometricMeasuresComponent', () => {
  let component: AnthropometricMeasuresComponent;
  let fixture: ComponentFixture<AnthropometricMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnthropometricMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthropometricMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
