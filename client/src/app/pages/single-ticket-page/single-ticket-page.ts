import { Component } from '@angular/core';
import { TicketDetail } from '../../components/ticket-detail/ticket-detail';

@Component({
  selector: 'app-single-ticket-page',
  imports: [TicketDetail],
  templateUrl: './single-ticket-page.html',
  styleUrl: './single-ticket-page.css',
})
export class SingleTicketPage {}
