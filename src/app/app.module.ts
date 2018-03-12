import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { FooterComponent } from './footer/footer.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CallForPapersComponent,
    WelcomeComponent,
    NewsletterSignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    ServiceWorkerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
