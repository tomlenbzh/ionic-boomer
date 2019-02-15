import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isSignedIn: boolean;

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!localStorage.getItem('user') && !localStorage.getItem('token')) {
      this.router.navigateByUrl('authentication');
    } else {
      this.isSignedIn = true;
    }
    return this.isSignedIn;
  }
}
