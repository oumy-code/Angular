import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { isConnectChildGuard } from './is-connect-child.guard';

describe('isConnectChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isConnectChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
