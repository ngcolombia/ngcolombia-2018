import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material'

import { AppComponent } from './app.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from "@angular/forms";


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
