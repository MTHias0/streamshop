import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { resolve } from 'dns';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';
import { movie } from '../../models/movie.model';
import { MoviesListService } from './movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies: movie[] = [];
  public genres: any;
  public genre: string[][] = [];
  public test: boolean = true;
  public searchText: string = '';

  constructor(
    private moviesListService: MoviesListService,
    private movieService: MovieHandlerService
  ) { }

  public ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): any {
    this.moviesListService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.genre = movies.map(el => el.genres);
    });
  }

  public onTextSearch(seachText: string): any {
    this.searchText = seachText;

  }

}
