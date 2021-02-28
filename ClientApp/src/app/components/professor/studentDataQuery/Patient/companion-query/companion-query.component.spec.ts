import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionQueryComponent } from './companion-query.component';

describe('CompanionQueryComponent', () => {
  let component: CompanionQueryComponent;
  let fixture: ComponentFixture<CompanionQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
