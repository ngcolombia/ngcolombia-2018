import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from "@angular/service-worker";
import { MatButtonModule } from '@angular/material'

import { AppComponent } from './app.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';


@NgModule({
  declarations: [
    AppComponent,
    CallForPapersComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
