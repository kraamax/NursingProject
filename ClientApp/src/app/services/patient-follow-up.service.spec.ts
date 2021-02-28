import { TestBed } from '@angular/core/testing';

import { PatientFollowUpService } from './patient-follow-up.service';

describe('PatientFollowUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientFollowUpService = TestBed.get(PatientFollowUpService);
    expect(service).toBeTruthy();
  });
});
