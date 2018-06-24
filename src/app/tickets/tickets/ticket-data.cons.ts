import { ITicketCategory } from '../definitions/iticket.model';

export const Tickets: ITicketCategory[] = [
  {
    category: 'Basic',
    tickets: [
      {
        name: 'Conference',
        value: 55,
      },
      {
        name: 'Workshop',
        value: 90,
      },
    ],
  },
  {
    category: 'Premium',
    discountPercent: 0.14,
    tickets: [
      {
        name: 'Conference + 1 Workshop',
        value: 125,
      },
    ],
  },
  {
    category: 'Enterprise',
    discountPercent: 0.19,
    tickets: [
      {
        name: 'Conference + 2 Workshops',
        value: 190,
      },
    ],
  },
] as ITicketCategory[];
