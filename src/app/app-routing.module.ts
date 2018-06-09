import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'speakers',
    loadChildren: 'app/speakers/speakers.module#SpeakersModule',
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
