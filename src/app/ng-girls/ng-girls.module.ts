import { CommonModule } from '@angular/common';
import { NgGirlsComponent } from './ng-girls/ng-girls.component';
import { NgGirlsRoutingModule } from './ng-girls-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  imports: [CommonModule, NgGirlsRoutingModule, SharedModule],
  declarations: [NgGirlsComponent],
})
export class NgGirlsModule {}
