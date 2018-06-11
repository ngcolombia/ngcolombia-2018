import { Activity } from '@core/definitions/activity.model';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity;
  constructor() {}

  ngOnInit() {}
}
