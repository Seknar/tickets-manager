import { IsIn } from 'class-validator';
import { type TicketStatus, TICKET_STATUSES } from '../entities/ticket.entity';

export class UpdateTicketStatusDto {
  @IsIn(TICKET_STATUSES)
  status: TicketStatus;
}
