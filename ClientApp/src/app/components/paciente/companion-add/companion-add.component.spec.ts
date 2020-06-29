import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionAddComponent } from './companion-add.component';

describe('CompanionAddComponent', () => {
  let component: CompanionAddComponent;
  let fixture: ComponentFixture<CompanionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
