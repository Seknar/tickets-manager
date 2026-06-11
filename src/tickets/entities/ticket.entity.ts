export const TICKET_STATUSES = ['open', 'in_progress', 'closed'] as const;
export type TicketStatus = (typeof TICKET_STATUSES)[number];

export const TICKET_PRIORITIES = ['low', 'medium', 'high'] as const;
export type TicketPriority = (typeof TICKET_PRIORITIES)[number];

export class Ticket {
  id: number;
  title: string;
  description: string;
  customerName: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
}
