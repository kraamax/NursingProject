import { TestBed } from '@angular/core/testing';

import { PersonalBackgroundService } from './personal-background.service';

describe('PersonalBackgroundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalBackgroundService = TestBed.get(PersonalBackgroundService);
    expect(service).toBeTruthy();
  });
});
