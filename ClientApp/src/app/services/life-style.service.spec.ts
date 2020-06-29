import { TestBed } from '@angular/core/testing';

import { LifeStyleService } from './life-style.service';

describe('LifeStyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeStyleService = TestBed.get(LifeStyleService);
    expect(service).toBeTruthy();
  });
});
