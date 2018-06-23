import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketCardComponent } from './tickets/ticket-card/ticket-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TicketsRoutingModule,
  ],
  declarations: [TicketsComponent, TicketCardComponent],
})
export class TicketsModule { }
