import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '../material/material.module';
import { SpeakerPhotoUrlPipe } from './core/speaker-photo.pipe';
import { SpeakersBioComponent } from './speakers-bio/speakers-bio.component';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { SpeakersRoutingModule } from './speakers-routing.module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MaterialModule, SpeakersRoutingModule],
  declarations: [SpeakerPhotoUrlPipe, SpeakersBioComponent, SpeakersListComponent],
  entryComponents: [SpeakersBioComponent],
})
export class SpeakersModule {}
