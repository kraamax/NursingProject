import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfessorComponent } from './navbar-professor.component';

describe('NavbarProfessorComponent', () => {
  let component: NavbarProfessorComponent;
  let fixture: ComponentFixture<NavbarProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
