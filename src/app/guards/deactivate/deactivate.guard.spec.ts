import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivateGuard } from './deactivate.guard';

describe('DeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateGuard]
    });
  });

  it('should ...', inject([DeactivateGuard], (guard: DeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
