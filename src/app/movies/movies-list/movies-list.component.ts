import { Component, OnInit } from '@angular/core';
import { movie } from '../../models/movie.model';
import { MoviesListService } from './movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies: any;

  constructor(
    private moviesService: MoviesListService
  ) { }

  public ngOnInit(): void {
    this.getMovies()
  }

  public getMovies(): void {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

}
