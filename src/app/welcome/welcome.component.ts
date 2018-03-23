import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition, query, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [ './welcome.component.scss' ],
})
export class WelcomeComponent {
  @ViewChild('revealTarget')
  revealTarget: ElementRef;

  player: AnimationPlayer;

  constructor(private builder: AnimationBuilder) { }

  setAnimationProgress(event: MatSliderChange) {

    // Build initial style & animation function
    const animation = this.builder.build([
      animate('600ms ease-out', style({ width: `${event.value}%`})),
    ]);

    let oldPlayer = this.player;

    // Create player for animation & play
    this.player = animation.create(this.revealTarget.nativeElement);
    this.player.play();

    // Destroy old player
    if (oldPlayer) {
      oldPlayer.destroy();
      oldPlayer = null;
    }
  }
}
