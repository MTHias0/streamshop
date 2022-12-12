import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChooseMovieGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let movieId = true;
    if(!movieId) {
    //   this.alertService.showAlert(
    //     "Please, select an active state to continue.",
    //     "warning"
    // );
      return false;
    }
    return true;
  }

}
