import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
  } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  } from '@angular/core';
import { MatSliderChange } from '@angular/material';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @ViewChild('revealTarget') public revealTarget: ElementRef;
  @ViewChild('slider') public slider: ElementRef;
  @ViewChild('moveMe') public moveMe: ElementRef;

  public player: AnimationPlayer;
  public animationInputEmitter = new EventEmitter<MatSliderChange>();
  public animationChangeEmitter = new EventEmitter<MatSliderChange>();

  constructor(private builder: AnimationBuilder) {
    this.animationInputEmitter.pipe(
      throttleTime(20),
    ).subscribe(this.setAnimationProgress);
  }

  setAnimationProgress = (event: MatSliderChange) => {

    if (event.value > 50) {
      event.source._elementRef.nativeElement.style.setProperty('border-color', '#211056');
      this.moveMe.nativeElement.style.setProperty('color', '#211056');
      event.source._elementRef.nativeElement
        .querySelector('.mat-slider-thumb')
        .style.setProperty('background-color', '#211056');
    } else {
      event.source._elementRef.nativeElement.style.setProperty('border-color', 'white');
      this.moveMe.nativeElement.style.setProperty('color', 'white');
      event.source._elementRef.nativeElement
        .querySelector('.mat-slider-thumb')
        .style.setProperty('background-color', '#78f5ff');
    }

    const animation = this.builder.build([animate('300ms ease-out', style({ width: `${event.value}%` }))]);

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
