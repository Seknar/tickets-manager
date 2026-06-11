import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type TicketStatus = 'open' | 'in-progress' | 'closed';
export type TicketPriority = 'low' | 'medium' | 'high';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  customerName: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
}

export interface CreateTicket {
  title: string;
  description: string;
  customerName: string;
  priority: TicketPriority;
}

export interface UpdateTicket {
  status: TicketStatus;
}

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private readonly apiUrl = 'http://localhost:3000/tickets';

  constructor(private http : HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  postTicket(ticket: CreateTicket): Observable<Ticket[]> {
    return this.http.post<Ticket[]>(this.apiUrl, ticket);
  }

  patchTicketStatus(id: number, status: TicketStatus): Observable<Ticket> {
    return this.http.patch<Ticket>(`${this.apiUrl}/${id}/status`, { status });
  }
}