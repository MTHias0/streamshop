import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseMovieGuard } from './guards/choose-movie.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { SchedulesListComponent } from './schedules/schedules-list/schedules-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: 'movies', component: MoviesListComponent
  },

  {
    path: 'schedule', component: SchedulesListComponent, canActivate: [ChooseMovieGuard]
  },
  {
    path: 'login', component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
