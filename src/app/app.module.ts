import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { FooterComponent } from './footer/footer.component';

import { environment } from '../environments/environment';
import { ToggleSliderComponent } from './welcome/toggle-slider/toggle-slider.component';
import { ParallaxHoverDirective } from './shared/directives/parallax-hover.directive';
import { ParallaxBigBangDirective } from './shared/directives/parallax-bigbang.directive';
import { MadnessDirective } from './shared/directives/madness.directive';
import { ToggleSliderDirective } from './welcome/toggle-slider/directives/toggle-slider.directive';
import { ToggleSliderElementDirective } from './welcome/toggle-slider/directives/toggle-slider-element.directive';


@NgModule({
  declarations: [
    AppComponent,
    CallForPapersComponent,
    WelcomeComponent,
    NewsletterSignupComponent,
    FooterComponent,
    ToggleSliderComponent,
    ToggleSliderDirective,
    ParallaxHoverDirective,
    ParallaxBigBangDirective,
    MadnessDirective,
    ToggleSliderElementDirective
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    ServiceWorkerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
