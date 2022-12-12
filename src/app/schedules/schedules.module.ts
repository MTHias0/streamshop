import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ScheduleCardComponent,
    SchedulesListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class SchedulesModule { }
