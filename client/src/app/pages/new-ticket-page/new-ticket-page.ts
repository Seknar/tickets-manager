import { Component } from '@angular/core';
import { CreateTicketForm } from '../../components/create-ticket-form/create-ticket-form';

@Component({
  selector: 'app-new-ticket-page',
  imports: [CreateTicketForm],
  templateUrl: './new-ticket-page.html',
  styleUrl: './new-ticket-page.css',
})
export class NewTicketPage {}
