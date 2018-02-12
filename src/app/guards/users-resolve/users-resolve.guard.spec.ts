import { TestBed, async, inject } from '@angular/core/testing';

import { UsersResolveGuard } from './users-resolve.guard';

describe('UsersResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersResolveGuard]
    });
  });

  it('should ...', inject([UsersResolveGuard], (guard: UsersResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
