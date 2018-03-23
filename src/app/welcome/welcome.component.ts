import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { MatSliderChange } from '@angular/material';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [ './welcome.component.scss' ],
})
export class WelcomeComponent {
  @ViewChild('revealTarget')
  public revealTarget: ElementRef;

  public player: AnimationPlayer;
  public animationInputEmitter = new EventEmitter<MatSliderChange>();
  public animationChangeEmitter = new EventEmitter<MatSliderChange>();

  constructor(private builder: AnimationBuilder) {
    this.animationInputEmitter.pipe(
      throttleTime(50),
    ).subscribe(this.setAnimationProgress);
  }

  setAnimationProgress = (event: MatSliderChange) => {

    // Build initial style & animation function
    const animation = this.builder.build([
      animate('300ms ease-out', style({ width: `${event.value}%` })),
    ]);

    let oldPlayer = this.player;

    // Create player for animation & play
    this.player = animation.create(this.revealTarget.nativeElement);
    this.player.play();

    /**
     * Destroy old player, order is important,
     * destroy after new player is running.
     */
    if (oldPlayer) {
      oldPlayer.destroy();
      oldPlayer = null;
    }
  }
}
