import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Speaker } from './speaker.models';
import { SpeakersBioComponent } from './speakers-bio/speakers-bio.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {
  public speakers: Speaker[];

  constructor(public dialog: MatDialog) {
    this.speakers = [
      new Speaker({
        name: 'Carlos Lopez Jaramillo',
        title: 'Digital App Developer',
        bio: 'A great guy',
        github: 'https://github.com/luchillo17',
        twitter: 'https://twitter.com/luchillo17',
        photo: 'https://secure.gravatar.com/avatar/357efbf6f7a1495e5854cb47728fa523?s=64',
      }),
      ...new Array(5).fill(1).map(() => new Speaker()),
    ];
  }

  showBio(speaker: Speaker) {
    this.dialog.open(SpeakersBioComponent, { data: speaker });
  }
}
