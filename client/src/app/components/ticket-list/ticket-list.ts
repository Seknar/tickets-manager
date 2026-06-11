import { Component, signal } from '@angular/core';
import { TicketsService, Ticket } from '../../services/tickets';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList {
  tickets = signal<Ticket[]>([]);

  constructor(private ticketsService: TicketsService) {}

  ngOnInit() {
    this.ticketsService.getTickets().subscribe({
      next: (data) => {
        this.tickets.set(data ?? []);
        console.log('Tickets loaded:', this.tickets().length);
      },
      error: (err) => {
          console.error('Failed to load tickets', err);
      }
    });
  }
}