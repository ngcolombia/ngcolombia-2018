import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  imports: [CommonModule, FaqRoutingModule, SharedModule],
  declarations: [FaqComponent],
})
export class FaqModule {}
