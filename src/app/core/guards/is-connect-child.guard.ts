import { CanActivateChildFn } from '@angular/router';

export const isConnectChildGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
