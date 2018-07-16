import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule',
  },
  {
    path: 'schedule',
    loadChildren: 'app/schedule/schedule.module#ScheduleModule',
  },
  {
    path: 'speakers',
    loadChildren: 'app/speakers/speakers.module#SpeakersModule',
  },
  {
    path: 'tickets',
    loadChildren: 'app/tickets/tickets.module#TicketsModule',
  },
  {
    path: 'coc',
    loadChildren: 'app/coc/coc.module#CocModule',
  },
  {
    path: 'community',
    loadChildren: 'app/community/community.module#CommunityModule',
  },
  {
    path: 'faq',
    loadChildren: 'app/faq/faq.module#FaqModule',
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
