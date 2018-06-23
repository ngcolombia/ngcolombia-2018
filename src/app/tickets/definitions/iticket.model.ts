export interface ITicketCategory {
  category: string;
  discountPercent: number;
  tickets: ITicket[];
}

export interface ITicket {
  name: string;
  value: number;
  available: boolean;
}
