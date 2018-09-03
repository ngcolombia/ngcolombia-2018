import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { ScheduleModule } from './schedule/schedule.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import '../style/fontAwesome.icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    ServiceWorkerModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FontAwesomeModule,
    HomeModule,
    ScheduleModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
