import { TestBed } from '@angular/core/testing';

import { PutBugService } from './put-bug.service';

describe('PutBugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutBugService = TestBed.get(PutBugService);
    expect(service).toBeTruthy();
  });
});
