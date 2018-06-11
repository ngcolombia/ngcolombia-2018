import { Component, OnInit } from '@angular/core';
import { EventService } from '@core/event/event.service';
import { MatDialog } from '@angular/material';
import { Speaker } from '@core/definitions/speaker.model';
import { SpeakersBioComponent } from '../speakers-bio/speakers-bio.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  public speakers: Speaker[];

  constructor(public dialog: MatDialog, private eventService: EventService) {
    this.speakers = this.eventService.speakers;
  }

  ngOnInit() {}

  showBio(speaker: Speaker) {
    this.dialog.open(SpeakersBioComponent, { data: speaker });
  }
}
