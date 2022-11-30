import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { movie } from '../../models/movie.model';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { MOVIE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MoviesListService {

  constructor(private http: HttpClient) { }

  public getMovies():Observable<movie[]>{
    return this.http.get<movie[]>(`${MOVIE_URL}`).pipe(tap(data => JSON.stringify(data)),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';

    if(err.error instanceof ErrorEvent) {

      errMsg = `An error occurred: ${err.error.message}`;
    } else {

      errMsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errMsg);
    return throwError(errMsg);
  }
}
