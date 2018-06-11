import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ActivityComponent } from './schedule/activity/activity.component';

@NgModule({
  imports: [CommonModule, ScheduleRoutingModule, SharedModule],
  declarations: [ScheduleComponent, ActivityComponent],
})
export class ScheduleModule {}
