import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localUser = localStorage.getItem('empErpUser');

  if (localUser != null) {
    return true;
  }else {
    router.navigateByUrl('/login');
    return false;
  }
};
