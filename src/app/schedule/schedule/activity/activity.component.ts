import { Activity } from '@core/definitions/activity.model';
import { Component, Input, OnInit } from '@angular/core';
import { GeneralActivity } from '@core/event/event-data';
import { InfoModalComponent } from '@shared/components/info-modal/info-modal.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  isGeneralActivity(activity: Activity): boolean {
    return activity.title in GeneralActivity;
  }

  openDetails(activity: Activity) {
    this.dialog.open(InfoModalComponent, { data: activity });
  }
}
