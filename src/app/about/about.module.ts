import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, SharedModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
