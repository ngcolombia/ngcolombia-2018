import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Speaker } from '@core/definitions/speaker.model';

@Component({
  selector: 'app-speakers-bio',
  templateUrl: './speakers-bio.component.html',
  styleUrls: ['./speakers-bio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersBioComponent {
  constructor(
    public dialogRef: MatDialogRef<SpeakersBioComponent>,
    @Inject(MAT_DIALOG_DATA) public speaker: Speaker,
  ) {}

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
