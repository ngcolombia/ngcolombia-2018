import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community/community.component';
import { CommunityRoutingModule } from './community-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SharedModule, CommonModule, CommunityRoutingModule],
  declarations: [CommunityComponent],
})
export class CommunityModule {}
