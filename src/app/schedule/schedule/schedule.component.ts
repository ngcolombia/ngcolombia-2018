import { Component, OnInit } from '@angular/core';
import { EventService } from '@core/event/event.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  thursday;
  friday;

  constructor(private eventService: EventService) {
    this.friday = this.eventService.fridayAgenda;
    this.thursday = this.eventService.thursdayAgenda;
  }

  ngOnInit() {}
}
