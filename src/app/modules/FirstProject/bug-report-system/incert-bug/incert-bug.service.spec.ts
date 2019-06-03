import { TestBed } from '@angular/core/testing';

import { IncertBugService } from './incert-bug.service';

describe('IncertBugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncertBugService = TestBed.get(IncertBugService);
    expect(service).toBeTruthy();
  });
});
