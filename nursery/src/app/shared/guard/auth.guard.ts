import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';



import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  eve = environment;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.user$.pipe(take(1),map(user => !!user && (user.email == this.eve.adminConfig.uName) ?
      true : false)
      ,tap(loggedIn => {
      if (!loggedIn) {
        console.log('Access denied');
        this.router.navigate(['/login']);
      }
    }))
  }
 
}
