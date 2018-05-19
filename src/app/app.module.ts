import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material/material.module';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { SpeakerPhotoUrlPipe } from './speakers/speaker-photo.pipe';
import { SpeakersBioComponent } from './speakers/speakers-bio/speakers-bio.component';
import { SpeakersComponent } from './speakers/speakers.component';
import '../style/fontAwesome.icons';

@NgModule({
  declarations: [AppComponent, NewsletterSignupComponent, SpeakersComponent, SpeakerPhotoUrlPipe, SpeakersBioComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    ServiceWorkerModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FontAwesomeModule,
    MaterialModule,
    HomeModule,
  ],
  entryComponents: [SpeakersBioComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
