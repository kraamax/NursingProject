import { TestBed } from '@angular/core/testing';

import { PhysicalExamService } from './physical-exam.service';

describe('PhysicalExamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhysicalExamService = TestBed.get(PhysicalExamService);
    expect(service).toBeTruthy();
  });
});
