import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteSeeDatosPComponent } from './paciente-see-datos-p.component';

describe('PacienteSeeDatosPComponent', () => {
  let component: PacienteSeeDatosPComponent;
  let fixture: ComponentFixture<PacienteSeeDatosPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteSeeDatosPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteSeeDatosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
