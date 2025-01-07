import { TestBed } from '@angular/core/testing';

import { DbServiceTsService } from './db.service.ts.service';

describe('DbServiceTsService', () => {
  let service: DbServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
