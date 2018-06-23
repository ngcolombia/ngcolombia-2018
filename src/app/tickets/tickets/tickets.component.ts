import { Component } from '@angular/core';
import { ITicketCategory } from '../definitions/iticket.model';
import { Tickets } from './ticket-data.cons';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {

  tickets: ITicketCategory[];
  
  constructor() {
    this.tickets = Tickets;
  }

}
