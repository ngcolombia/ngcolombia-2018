import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { NoImagePlaceholderDirective } from './heroes/directives/no-image-placeholder.directive'

@NgModule({
  imports: [CommonModule, HeroesRoutingModule, SharedModule],
  declarations: [HeroesComponent, NoImagePlaceholderDirective],
})
export class HeroesModule {}
