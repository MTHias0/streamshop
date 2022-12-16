import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Location } from '@angular/common'
import { MovieHandlerService } from '../services/movie-handler.service';

@Injectable({
  providedIn: 'root'
})

export class ChooseMovieGuard implements CanActivate {
  public movieId: string = '';

  constructor(
    private movieService: MovieHandlerService,
    private location: Location
  ) { }

  canActivate(): boolean {
    this.movieId = this.movieService.getMoviedId();
    if (!this.movieId) {
      this.location.back();

      return false;
    }

    return true;
  }

}
