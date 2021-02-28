import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarBGComponent } from './familiar-bg.component';

describe('FamiliarBGComponent', () => {
  let component: FamiliarBGComponent;
  let fixture: ComponentFixture<FamiliarBGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarBGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
