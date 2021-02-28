import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpSeeComponent } from './follow-up-see.component';

describe('FollowUpSeeComponent', () => {
  let component: FollowUpSeeComponent;
  let fixture: ComponentFixture<FollowUpSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUpSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
