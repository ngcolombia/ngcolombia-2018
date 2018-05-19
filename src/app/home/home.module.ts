import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, HomeBannerComponent],
})
export class HomeModule {}
