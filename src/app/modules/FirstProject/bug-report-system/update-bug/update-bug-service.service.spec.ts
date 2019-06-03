import { TestBed } from '@angular/core/testing';

import { UpdateBugServiceService } from './update-bug-service.service';

describe('UpdateBugServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateBugServiceService = TestBed.get(UpdateBugServiceService);
    expect(service).toBeTruthy();
  });
});
