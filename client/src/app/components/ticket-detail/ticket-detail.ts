import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService, Ticket, TicketStatus } from '../../services/tickets';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket-detail',
  imports: [DatePipe],
  templateUrl: './ticket-detail.html',
  styleUrl: './ticket-detail.css',
})
export class TicketDetail {
  ticket = signal<Ticket | null>(null);
  editingStatus = signal(false);
  selectedStatus = signal<TicketStatus>('open');

  constructor(private route: ActivatedRoute, private ticketsService: TicketsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.ticketsService.getTicketById(id).subscribe({
      next: (data) => {
        this.ticket.set(data);
        this.selectedStatus.set(data.status);
      },
      error: (err) => {
        console.error('Failed to load ticket', err);
      },
    });
  }

  startEditingStatus() {
    const currentTicket = this.ticket();

    if (!currentTicket) return;

    this.selectedStatus.set(currentTicket.status);
    this.editingStatus.set(true);
  }

  cancelEditingStatus() {
    const currentTicket = this.ticket();

    if (!currentTicket) return;

    this.selectedStatus.set(currentTicket.status);
    this.editingStatus.set(false);
  }

  onStatusChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as TicketStatus;
    this.selectedStatus.set(value);
  }

  saveStatus() {
    const currentTicket = this.ticket();

    if (!currentTicket) return;

    this.ticketsService.patchTicketStatus(currentTicket.id, this.selectedStatus()).subscribe({
      next: (updatedTicket) => {
        this.ticket.set(updatedTicket);
        this.selectedStatus.set(updatedTicket.status);
        this.editingStatus.set(false);

        console.log('Updated ticket:', updatedTicket);
      },
      error: (err) => {
        console.error('Failed to update ticket status', err);
      },
    });
  }
}
