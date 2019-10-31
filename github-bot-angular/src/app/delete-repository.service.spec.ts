import { TestBed } from '@angular/core/testing';

import { DeleteRepositoryService } from './delete-repository.service';

describe('DeleteRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteRepositoryService = TestBed.get(DeleteRepositoryService);
    expect(service).toBeTruthy();
  });
});
