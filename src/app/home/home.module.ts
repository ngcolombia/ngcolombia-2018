import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { HomeNewsletterComponent } from './home-newsletter/home-newsletter.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, HomeBannerComponent, HomeNewsletterComponent],
})
export class HomeModule {}
