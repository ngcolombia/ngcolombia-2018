import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITicketCategory } from '../../definitions/iticket.model';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketCardComponent {

  @Input() ticket: ITicketCategory;
  
}
