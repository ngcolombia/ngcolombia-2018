import { Activity } from '@core/definitions/activity.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
  @Input()
  activity: Activity;
  titleFontSize = '12px';
  speakerFontSize = '10px';
  gridHeight = '35px';
  constructor(private dialog: MatDialog, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 350px)']).subscribe((result) => {
      this.titleFontSize = '12px';
      this.speakerFontSize = '10px';
    });
    breakpointObserver.observe(['(max-width: 370px)']).subscribe((result) => {
      this.titleFontSize = '14px';
      this.speakerFontSize = '11px';
    });
  }

  ngOnInit() {}

  isGeneralActivity(activity: Activity): boolean {
    return activity.title in GeneralActivity;
  }

  openDetails(activity: Activity) {
    if (!this.isGeneralActivity(activity)) {
      this.dialog.open(InfoModalComponent, {
        width: '80vw',
        maxWidth: '800px',
        data: activity,
      });
    }
  }
}
