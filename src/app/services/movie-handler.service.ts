import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieHandlerService {
  public movieId: string = '';

  constructor() { }

  public setMovieId(movieId:string): void {
    this.movieId = movieId;
  }

  public getMoviedId(): string {
    return this.movieId;
  }

  public handleError(err: HttpErrorResponse) {
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
