import { TestBed } from '@angular/core/testing';
import { InsertBugService } from './insert-bug.service';


describe('InsertBugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertBugService = TestBed.get(InsertBugService);
    expect(service).toBeTruthy();
  });
});
