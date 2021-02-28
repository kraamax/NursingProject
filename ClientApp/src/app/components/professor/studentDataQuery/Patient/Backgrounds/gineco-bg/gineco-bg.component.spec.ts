import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinecoBGComponent } from './gineco-bg.component';

describe('GinecoBGComponent', () => {
  let component: GinecoBGComponent;
  let fixture: ComponentFixture<GinecoBGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinecoBGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinecoBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
