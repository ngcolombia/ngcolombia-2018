import '../style/fontAwesome.icons';

import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { SpeakerPhotoUrlPipe } from './speakers/speaker-photo.pipe';
import { SpeakersBioComponent } from './speakers/speakers-bio/speakers-bio.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { WelcomeComponent } from './welcome/welcome.component';

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
    SpeakersBioComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),

    FontAwesomeModule,

    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  entryComponents: [SpeakersBioComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
