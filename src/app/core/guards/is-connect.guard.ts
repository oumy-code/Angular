import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';

export const isConnectGuard: CanActivateFn = (route, state) => {
 let securityService:SecurityService = inject(SecurityService);
  let router = inject(Router);
  if(securityService.isAuthenticated()) {
    return true;
  } else {
    return router.parseUrl('/public/create-patient');
;
  }
};
