import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSocialComponent } from './personal-social.component';

describe('PersonalSocialComponent', () => {
  let component: PersonalSocialComponent;
  let fixture: ComponentFixture<PersonalSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
