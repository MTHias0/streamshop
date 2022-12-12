import { Component, Input, OnInit } from '@angular/core';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input()
  public image: any;

  @Input()
  public title: any;

  @Input()
  public genre: any;

  @Input()
  public movieId: any;

  constructor(
    private movieService: MovieHandlerService
  ) { }

  ngOnInit(): void {
  }

  public purchase(movieId: any) {
    this.movieService.setMovieId(movieId);
  }
}
