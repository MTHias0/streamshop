import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { movie } from '../../models/movie.model';
import { catchError, first, Observable, tap, throwError } from 'rxjs';
import { MOVIE_URL } from 'src/environments/environment';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';

@Injectable({
  providedIn: 'root'
})

export class MoviesListService {

  constructor(private http: HttpClient, private movieHandler: MovieHandlerService) { }

  public getMovies():Observable<movie[]>{
    return this.http.get<movie[]>(`${MOVIE_URL}`).pipe(
      first(),
      tap(movies => movies),
    catchError(this.movieHandler.handleError));
  }

}
