import { Routes } from '@angular/router';
import { TicketsPage } from './pages/tickets-page/tickets-page';
import { SingleTicketPage } from './pages/single-ticket-page/single-ticket-page';
import { NewTicketPage } from './pages/new-ticket-page/new-ticket-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: TicketsPage
  },
  {
    path: 'tickets/:id',
    component: SingleTicketPage
  },
  {
    path: 'new-ticket',
    component: NewTicketPage
  },
];
