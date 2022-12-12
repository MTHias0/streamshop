import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, Observable, tap } from 'rxjs';
import { event } from 'src/app/models/event.models';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';
import { EVENT_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchedulesListService {
  private handledUrl: string = '';

  constructor(private http: HttpClient, private movieHandler: MovieHandlerService) { }

  // public getMovies():Observable<movie[]>{
  //   return this.http.get<movie[]>(`${MOVIE_URL}`).pipe(tap(data => JSON.stringify(data)),
  //   catchError(this.handleError));
  // }

  public getEvents(): Observable<event[]> {
    return this.http.get<event[]>(this.handledUrl).pipe(
      first(),
      tap(event => event),
      catchError(this.movieHandler.handleError)
    );
  }

  public fixUrl(movieId: string): void {
    let splitedURL = EVENT_URL.split("/");
    splitedURL[7] = movieId;
    this.handledUrl = splitedURL.join("/");
  }
}
