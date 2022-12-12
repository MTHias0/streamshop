import { Component, Input, OnInit } from '@angular/core';
import { room } from 'src/app/models/room.models';

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent implements OnInit {
@Input()
public name: string = '';

@Input()
public address: string = '';

@Input()
public addressComplement: string = '';

@Input()
public rooms: any;

  constructor() { }

  ngOnInit(): void {
  }

}
