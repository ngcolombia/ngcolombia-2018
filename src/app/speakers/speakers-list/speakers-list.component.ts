import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Speaker } from '../core/speaker.model';
import { SpeakersBioComponent } from '../speakers-bio/speakers-bio.component';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersListComponent implements OnInit {
  public speakers: Speaker[];

  constructor(public dialog: MatDialog) {
    this.speakers = [
      new Speaker(
        'Carlos Lopez',
        'Digital App Developer',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, dicta vel? Esse magni voluptate tempore corporis ab assumenda. Nam omnis a laboriosam expedita vero voluptate, fuga veritatis dolorum placeat? Delectus. Sit, asperiores explicabo? Doloremque maxime facere nulla iure deleniti. Corrupti, maiores aliquam obcaecati harum soluta quo voluptate fugit cum magni nemo est reprehenderit vel unde cupiditate voluptatem nisi suscipit porro?',
        'https://secure.gravatar.com/avatar/357efbf6f7a1495e5854cb47728fa523?s=64',
        'https://twitter.com/luchillo17',
        'https://github.com/luchillo17',
        'https://www.instagram.com/luchillo24/',
      ),
      ...new Array(5).fill(1).map(() => new Speaker()),
    ];
  }

  ngOnInit() {}

  showBio(speaker: Speaker) {
    this.dialog.open(SpeakersBioComponent, { data: speaker });
  }
}
