import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { MadnessDirective } from './directives/madness.directive';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { ParallaxBigBangDirective } from './directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './directives/parallax-hover.directive';
import { ParallaxScrollDirective } from './directives/parallax-scroll.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [
    MadnessDirective,
    ParallaxBigBangDirective,
    ParallaxScrollDirective,
    ParallaxHoverDirective,
    FullscreenComponent,
    InfoModalComponent,
  ],
  exports: [
    MadnessDirective,
    MaterialModule,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
    ParallaxScrollDirective,
    FullscreenComponent,
    InfoModalComponent,
  ],
  entryComponents: [InfoModalComponent],
})
export class SharedModule {}
