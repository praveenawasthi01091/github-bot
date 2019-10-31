import { TestBed } from '@angular/core/testing';

import { AllRepositoryService } from './all-repository.service';

describe('AllRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllRepositoryService = TestBed.get(AllRepositoryService);
    expect(service).toBeTruthy();
  });
});
