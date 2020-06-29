import { TestBed } from '@angular/core/testing';

import { AnthropometricMeasuresService } from './anthropometric-measures.service';

describe('AnthropometricMeasuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnthropometricMeasuresService = TestBed.get(AnthropometricMeasuresService);
    expect(service).toBeTruthy();
  });
});
