import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAddComponent } from './paciente-add.component';

describe('PacienteAddComponent', () => {
  let component: PacienteAddComponent;
  let fixture: ComponentFixture<PacienteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
