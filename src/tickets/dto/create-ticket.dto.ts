import { IsString, IsNotEmpty, IsIn } from 'class-validator';
import { type TicketPriority, TICKET_PRIORITIES } from '../entities/ticket.entity';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsIn(TICKET_PRIORITIES)
  @IsNotEmpty()
  priority: TicketPriority;
}
