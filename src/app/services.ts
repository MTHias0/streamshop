import { MoviesListService } from "./movies/movies-list/movies-list.service";
import { SchedulesListService } from "./schedules/schedules-list/schedules-list.service";
import { MovieHandlerService } from "./services/movie-handler.service";

export const services = [
  MoviesListService,
  MovieHandlerService,
  SchedulesListService
];
