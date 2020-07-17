import { TestBed } from '@angular/core/testing';

import { DataParametersService } from './data-parameters.service';

describe('DataParametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataParametersService = TestBed.get(DataParametersService);
    expect(service).toBeTruthy();
  });
});
