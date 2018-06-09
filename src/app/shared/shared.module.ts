import { CommonModule } from '@angular/common';
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
  ],
  exports: [
    MadnessDirective,
    MaterialModule,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
    ParallaxScrollDirective,
  ],
})
export class SharedModule {}
