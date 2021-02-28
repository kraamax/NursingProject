import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBGComponent } from './personal-bg.component';

describe('PersonalBGComponent', () => {
  let component: PersonalBGComponent;
  let fixture: ComponentFixture<PersonalBGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
