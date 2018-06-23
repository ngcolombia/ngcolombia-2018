import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [CommonModule,
    AboutRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmGuPCk4GavjIeMRVNKLyl3WXjf3Y6vS8'
    })
  ],
  declarations: [AboutComponent],
})
export class AboutModule {}
