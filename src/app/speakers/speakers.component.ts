import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Speaker } from './speaker.models';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {
  public speakers: Speaker[] = new Array(5).fill(new Speaker());

  constructor() {
    console.log('====================================');
    console.log('Speakers: ', this.speakers);
    console.log('====================================');
  }
}
