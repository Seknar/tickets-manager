import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';
import { Ticket, type TicketStatus } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  private tickets: Ticket[] = [
    {
      id: 1,
      title: 'Problema accesso VPN',
      description: 'Il cliente non riesce a collegarsi alla VPN aziendale',
      customerName: 'Acme Srl',
      status: 'open',
      priority: 'high',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Richiesta nuova email',
      description: 'Creare un account email per nuovo dipendente',
      customerName: 'Studio Bianchi',
      status: 'in_progress',
      priority: 'medium',
      createdAt: new Date().toISOString(),
    },
  ];

  private nextId = 3;

  create(createTicketDto: CreateTicketDto): Ticket {
    const newTicket: Ticket = {
      id: this.nextId++,
      ...createTicketDto,
      status: 'open',
      createdAt: new Date().toISOString(),
    };
    this.tickets.push(newTicket);
    return newTicket;
  }

  findAll(status?: TicketStatus): Ticket[] {
    if (status) {
      return this.tickets.filter(ticket => ticket.status === status);
    }
    return this.tickets;
  }

  findOne(id: number): Ticket {
    const ticket = this.tickets.find(ticket => ticket.id === id);
    if (!ticket) {
      throw new NotFoundException(`Ticket with id #${id} not found`);
    }
    return ticket;
  }

  updateStatus(id: number, updateTicketStatusDto: UpdateTicketStatusDto): Ticket {
    const ticket = this.findOne(id);
    ticket.status = updateTicketStatusDto.status;
    return ticket;
  }

  remove(id: number): void {
    const ticketIndex = this.tickets.findIndex(ticket => ticket.id === id);
    if (ticketIndex !== -1) {
      this.tickets.splice(ticketIndex, 1);
    }
  }
}
