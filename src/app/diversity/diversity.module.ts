import { CommonModule } from '@angular/common';
import { DiversityComponent } from './diversity/diversity.component';
import { DiversityRoutingModule } from './diversity-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [CommonModule, DiversityRoutingModule, SharedModule],
  declarations: [DiversityComponent],
})
export class DiversityModule {}
