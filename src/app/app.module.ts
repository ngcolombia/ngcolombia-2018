import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatSnackBarModule,
  MatIconModule,
  MatGridListModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { MadnessDirective } from './shared/directives/madness.directive';
import { ParallaxBigBangDirective } from './shared/directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './shared/directives/parallax-hover.directive';
import { SpeakersComponent } from './speakers/speakers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SpeakerPhotoUrlPipe } from './speakers/speaker-photo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CallForPapersComponent,
    FooterComponent,
    HomeComponent,
    MadnessDirective,
    NewsletterSignupComponent,
    ParallaxBigBangDirective,
    ParallaxHoverDirective,
    SpeakersComponent,
    WelcomeComponent,
    SpeakerPhotoUrlPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),

    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
