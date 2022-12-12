import { Component, OnInit, Output } from '@angular/core';
import { event } from 'src/app/models/event.models';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';
import { SchedulesListService } from './schedules-list.service';

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
  styleUrls: ['./schedules-list.component.scss']
})
export class SchedulesListComponent implements OnInit {
  public movieId: string = '';
  public event: event[] = [];
  public address: string = '';
  public addressComplement: string = '';

  constructor(
    private movieService: MovieHandlerService,
    private scheduleService: SchedulesListService
  ) { }

  ngOnInit(): void {
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
    let list: string[] = [];
    details.rooms.forEach((room => {
      list.push(room.name)
    }))

    return list;
  }

}
