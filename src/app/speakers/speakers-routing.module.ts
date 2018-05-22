import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpeakersListComponent } from './speakers-list/speakers-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpeakersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakersRoutingModule {}
