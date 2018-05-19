import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MadnessDirective } from './directives/madness.directive';
import { NgModule } from '@angular/core';
import { ParallaxBigBangDirective } from './directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './directives/parallax-hover.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, MadnessDirective, ParallaxBigBangDirective, ParallaxHoverDirective, HeaderComponent],
  exports: [FooterComponent, MadnessDirective, ParallaxBigBangDirective, ParallaxHoverDirective, HeaderComponent],
})
export class SharedModule {}
