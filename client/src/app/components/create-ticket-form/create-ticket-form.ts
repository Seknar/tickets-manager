import { Component, signal } from '@angular/core';
import { TicketsService, CreateTicket } from '../../services/tickets';
import { form, FormField, required, debounce } from '@angular/forms/signals';

@Component({
  selector: 'app-create-ticket-form',
  imports: [FormField],
  templateUrl: './create-ticket-form.html',
  styleUrl: './create-ticket-form.css',
})
export class CreateTicketForm {
  ticketModel = signal<CreateTicket>({
    title: '',
    description: '',
    customerName: '',
    priority: 'medium',
  });
  ticketForm = form(this.ticketModel, (schemaPath) => {
    debounce(schemaPath.title, 50);
    required(schemaPath.title);
    debounce(schemaPath.description, 200);
    required(schemaPath.description);
    debounce(schemaPath.customerName, 50);
    required(schemaPath.customerName);
    required(schemaPath.priority);
  });
  
  constructor(private ticketsService: TicketsService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.ticketsService.postTicket(this.ticketModel()).subscribe({
      next: (data) => {
        console.log('Created ticket:', data);

        this.ticketModel.set({
          title: '',
          description: '',
          customerName: '',
          priority: 'medium',
        });
      },
      error: (err) => {
        console.error('Failed to create ticket', err);
      }
    });
  }
}
