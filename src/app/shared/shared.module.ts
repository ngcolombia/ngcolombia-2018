import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { MadnessDirective } from './directives/madness.directive';
import { ParallaxBigBangDirective } from './directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './directives/parallax-hover.directive';
import { ParallaxScrollDirective } from './directives/parallax-scroll.directive';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [FooterComponent, MadnessDirective, MenuComponent, ParallaxBigBangDirective, ParallaxScrollDirective, ParallaxHoverDirective],
  exports: [
    FooterComponent,
    MadnessDirective,
    MaterialModule,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
    ParallaxScrollDirective,
    MenuComponent,
  ],
})
export class SharedModule {}
