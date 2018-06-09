import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { PhotoUrlPipe } from './photo-url/photo-url.pipe';
import { SharedModule } from '../shared/shared.module';
import { SpeakersBioComponent } from './speakers-bio/speakers-bio.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersRoutingModule } from './speakers-routing.module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, SharedModule, SpeakersRoutingModule],
  declarations: [PhotoUrlPipe, SpeakersBioComponent, SpeakersComponent],
  entryComponents: [SpeakersBioComponent],
})
export class SpeakersModule {}
