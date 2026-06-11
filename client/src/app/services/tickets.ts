import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Ticket {
  id: number;
  title: string;
  description: string;
  customerName: string;
  status: 'open' | 'in-progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export interface CreateTicket {
  title: string;
  description: string;
  customerName: string;
  priority: 'low' | 'medium' | 'high';
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

  postTicket(ticket: CreateTicket): Observable<Ticket[]> {
    return this.http.post<Ticket[]>(this.apiUrl, ticket);
  }
}