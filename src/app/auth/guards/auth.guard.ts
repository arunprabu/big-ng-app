import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Dependency Injection in function
  const router = inject(Router);

  // if authenticated return true 
  if(localStorage.getItem("authToken")){
    return true; 
  } else {
    // redirect to login and return false
    router.navigate(['/auth/login']);
    return false;
  }
};
