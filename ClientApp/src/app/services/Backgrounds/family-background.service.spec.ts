import { TestBed } from '@angular/core/testing';

import { FamilyBackgroundService } from './family-background.service';

describe('FamilyBackgroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyBackgroundService = TestBed.get(FamilyBackgroundService);
    expect(service).toBeTruthy();
  });
});
