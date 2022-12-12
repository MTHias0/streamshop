import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { SearchComponent } from '../shared/search/search.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MoviesModule { }
