import { ITicketCategory } from '../definitions/iticket.model';

export const Tickets: ITicketCategory[] = [
  {
    category: 'Basic',
    tickets: [
      {
        name: 'Conference',
        value: 50,
      },
      {
        name: 'Workshop',
        value: 80,
      },
    ],
  },
  {
	category: 'Premium',
	discountPercent: .15,
    tickets: [
      {
        name: 'Conference + 1 Workshop',
        value: 110,
      },
    ],
  },
  {
	category: 'Enterprise',
	discountPercent: .25,
    tickets: [
      {
        name: 'Conference + 2 Workshops',
        value: 158,
      },
    ],
  },
] as ITicketCategory[];
