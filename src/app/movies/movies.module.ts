import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
