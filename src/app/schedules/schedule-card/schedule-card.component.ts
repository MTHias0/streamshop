import { Component, Input, OnInit } from '@angular/core';
import { room } from 'src/app/models/room.models';
import { session } from 'src/app/models/seassion.model';

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

@Input()
public types: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
