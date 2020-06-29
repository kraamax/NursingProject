import { TestBed } from '@angular/core/testing';

import { GinecoBackgroundService } from './gineco-background.service';

describe('GinecoBackgroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GinecoBackgroundService = TestBed.get(GinecoBackgroundService);
    expect(service).toBeTruthy();
  });
});
