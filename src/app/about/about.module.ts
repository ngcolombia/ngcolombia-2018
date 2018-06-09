import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
