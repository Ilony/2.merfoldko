// components/ticket-list/ticket-list.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { Ticket } from '../../models/ticket.model';
import { HungarianDatePipe } from '../../pipes/hu-date.pipe'; // ha standalone pipe

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  templateUrl: './ticket-list.component.html',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    HungarianDatePipe // ha huDate pipe standalone
  ]
})
export class TicketListComponent {
  @Input() tickets: Ticket[] = [];
}
