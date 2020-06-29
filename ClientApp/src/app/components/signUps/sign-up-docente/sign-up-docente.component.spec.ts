import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDocenteComponent } from './sign-up-docente.component';

describe('SignUpDocenteComponent', () => {
  let component: SignUpDocenteComponent;
  let fixture: ComponentFixture<SignUpDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
