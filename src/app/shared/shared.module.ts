import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { MadnessDirective } from './directives/madness.directive';
import { ParallaxBigBangDirective } from './directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './directives/parallax-hover.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    MadnessDirective,
    MenuComponent,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MadnessDirective,
    MaterialModule,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
  ],
})
export class SharedModule {}
