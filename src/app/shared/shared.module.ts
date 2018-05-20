import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MadnessDirective } from './directives/madness.directive';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { ParallaxBigBangDirective } from './directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './directives/parallax-hover.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [FooterComponent, MadnessDirective, MenuComponent, ParallaxBigBangDirective, ParallaxHoverDirective],
  exports: [
    FooterComponent,
    MadnessDirective,
    MaterialModule,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
    MenuComponent,
  ],
})
export class SharedModule {}
