import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '../material/material.module';
import { SpeakerPhotoUrlPipe } from './speaker-photo.pipe';
import { SpeakersBioComponent } from './speakers-bio/speakers-bio.component';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MaterialModule, SpeakersRoutingModule],
  declarations: [SpeakerPhotoUrlPipe, SpeakersBioComponent, SpeakersComponent],
  entryComponents: [SpeakersBioComponent],
})
export class SpeakersModule {}
