import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { MadnessDirective } from './shared/directives/madness.directive';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { NgModule } from '@angular/core';
import { ParallaxBigBangDirective } from './shared/directives/parallax-bigbang.directive';
import { ParallaxHoverDirective } from './shared/directives/parallax-hover.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { WelcomeComponent } from './welcome/welcome.component';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatSliderModule,
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomeComponent,
    MadnessDirective,
    ParallaxHoverDirective,
    CallForPapersComponent,
    ParallaxBigBangDirective,
    NewsletterSignupComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    ServiceWorkerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
