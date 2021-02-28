import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFollowUpListComponent } from './query-follow-up-list.component';

describe('QueryFollowUpListComponent', () => {
  let component: QueryFollowUpListComponent;
  let fixture: ComponentFixture<QueryFollowUpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryFollowUpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFollowUpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
