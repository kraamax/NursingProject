import { TestBed } from '@angular/core/testing';

import { StudentRequestService } from './student-request.service';

describe('StudentRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRequestService = TestBed.get(StudentRequestService);
    expect(service).toBeTruthy();
  });
});
