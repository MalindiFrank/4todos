import { TestBed } from '@angular/core/testing';

import { AuthGuardTsService } from './auth.guard';

describe('AuthGuardTsService', () => {
  let service: AuthGuardTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
