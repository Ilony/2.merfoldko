import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';

import { Bus } from './models/bus.model';
import { Ticket } from './models/ticket.model';
import { Reservation } from './models/reservation.model';
import { Passenger } from './models/passanger.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BusListComponent,
    ReservationFormComponent,
    TicketListComponent,
    PassengerListComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Buszjegy foglaló rendszer';

  selectedBus: Bus = {
    id: 1,
    busNumber: 'BUS-101',
    type: 'Városi',
    origin: 'Budapest',
    destination: 'Győr',
    departureTime: new Date('2025-05-20T08:00:00'),
    capacity: 50
  };

  tickets: Ticket[] = [];

  constructor(private dataService: DataService) {}

  onBusSelected(bus: Bus) {
    this.selectedBus = bus;
  }

  private calculatePrice(reservation: Reservation): number {
    return reservation.seatCount * 2500;
  }

  onReservationSubmitted(reservation: Reservation) {
    // Szétbontjuk a passengerName mezőt vezetéknévre és keresztnévre
    const nameParts = reservation.passengerName.trim().split(' ');
    const lastName = nameParts[0] || 'Ismeretlen';
    const firstName = nameParts.slice(1).join(' ') || 'Ismeretlen';

    const newPassenger: Passenger = {
      id: 0, // ideiglenes, majd a DataService kezeli
      firstName,
      lastName,
      email: reservation.passengerEmail,
      phone: '' // nincs telefon, mivel a reservation nem tartalmazza
    };

    this.dataService.addPassenger(newPassenger);

    const addedPassenger = this.dataService
      .getPassengers()
      .find(p => p.email === reservation.passengerEmail);

    if (!addedPassenger) {
      console.error('Nem sikerült hozzáadni az utast!');
      return;
    }

    const newTicket: Ticket = {
      id: Date.now(),
      price: this.calculatePrice(reservation),
      issueDate: new Date(),
      seatNumber: Math.floor(Math.random() * 30),
      passengerId: addedPassenger.id,
      busId: reservation.busId
    };

    this.tickets.push(newTicket);
    this.dataService.addTicket(newTicket);
  }
}
