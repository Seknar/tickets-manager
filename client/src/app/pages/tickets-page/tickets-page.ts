import { Component } from '@angular/core';
import { TicketList } from '../../components/ticket-list/ticket-list';

@Component({
  selector: 'app-tickets-page',
  imports: [TicketList],
  templateUrl: './tickets-page.html',
  styleUrl: './tickets-page.css',
})
export class TicketsPage {}
