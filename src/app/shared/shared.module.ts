import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MadnessDirective } from './directives/madness.directive';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './header/menu/menu.component';
import { NgModule } from '@angular/core';
import { ParallaxBigBangDirective } from './directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './directives/parallax-hover.directive';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    FooterComponent,
    MadnessDirective,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
    HeaderComponent,
    MenuComponent,
  ],
  exports: [
    FooterComponent,
    MadnessDirective,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
    HeaderComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
