import { TestBed } from '@angular/core/testing';

import { CreateRepositoryService } from './create-repository.service';

describe('CreateRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateRepositoryService = TestBed.get(CreateRepositoryService);
    expect(service).toBeTruthy();
  });
});
