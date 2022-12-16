import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { event } from 'src/app/models/event.models';
import { movie } from 'src/app/models/movie.model';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';
import { routes } from 'src/routes.helper';
import { SchedulesListService } from './schedules-list.service';

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.scss']
})
export class SchedulesListComponent implements OnInit {
  public movieId: string = '';
  public event: event[] = [];
  public actualPage: string = '';
  public test: movie[] = [];
  public address: string = '';
  public addressComplement: string = '';
  public routes: string[] = routes;

  constructor(
    private movieService: MovieHandlerService,
    private scheduleService: SchedulesListService,
    private location: Location

  ) { }

  async ngOnInit(): Promise<void> {
    await this.movieService.isTheFirstPage(this.routes, this.actualPage)
    this.actualPage = this.location.path()
    this.movieId = this.movieService.getMoviedId();
    this.scheduleService.fixUrl(this.movieId);
    this.getEvents();
  }

  public getEvents(): any {
    this.scheduleService.getEvents().subscribe(events => {
      this.event = events.map(el => el);
    })
  }

  public getRoomsList(details: event): string[] {
    let roomList: string[] = [];
    details.rooms.forEach((room => {
      roomList.push(room.name)
    }))

    return roomList;
  }

  public getMovieType(details: event): string[] {
    let type: string[] = [];
    details.rooms.forEach((room => {
      type = room.types
    }))

    return type;
  }

}
