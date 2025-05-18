import { Injectable } from '@angular/core';
import { Bus } from '../models/bus.model';
import { Ticket } from '../models/ticket.model';
import { Passenger } from '../models/passanger.model';
import { Reservation } from '../models/reservation.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private buses: Bus[] = [
    {
      id: 1,
      busNumber: 'B123',
      origin: 'Budapest',
      destination: 'Debrecen',
      departureTime: new Date('2025-05-19T08:00'),
      capacity: 50,
      type: 'Intercity'
    },
    {
      id: 2,
      busNumber: 'B456',
      origin: 'Szeged',
      destination: 'Pécs',
      departureTime: new Date('2025-05-20T09:30'),
      capacity: 45,
      type: 'Express'
    },
    {
      id: 3,
      busNumber: 'B789',
      origin: 'Győr',
      destination: 'Miskolc',
      departureTime: new Date('2025-05-21T07:45'),
      capacity: 40,
      type: 'Local'
    }
    
  ];
  

  private passengers: Passenger[] = [
    {
      id: 1,
      lastName: 'Kovács',
      firstName: 'Anna',
      email: 'anna@example.com',
      phone: '0612345678'
    },
    {
      id: 2,
      lastName: 'Nagy',
      firstName: 'Béla',
      email: 'bela@example.com',
      phone: '0620123456'
    }
  ];

  private tickets: Ticket[] = [
    { id: 1, busId: 1, passengerId: 1, seatNumber: 12, price: 2000, issueDate: new Date('2020-03-02') },
    { id: 2, busId: 2, passengerId: 2, seatNumber: 5, price: 2000, issueDate: new Date('2020-03-02')  }
  ];

  private reservations: Reservation[] = [];

  // --- Buses ---
  getBuses(): Bus[] {
    return this.buses;
  }

  getBusById(id: number): Bus | undefined {
    return this.buses.find(bus => bus.id === id);
  }

  // --- Passengers ---
  getPassengers(): Passenger[] {
    return this.passengers;
  }
  
  getPassengerById(id: number): Passenger | undefined {
    return this.passengers.find(p => p.id === id);
  }
  
  addPassenger(passenger: Passenger): void {
    passenger.id = this.passengers.length + 1;
    this.passengers.push(passenger);
  }

  // --- Tickets ---
  getTickets(): Ticket[] {
    return this.tickets;
  }

  addTicket(ticket: Ticket): void {
    ticket.id = this.tickets.length + 1;
    this.tickets.push(ticket);
  }

  getTicketsByBusId(busId: number): Ticket[] {
    return this.tickets.filter(ticket => ticket.busId === busId);
  }

  // --- Reservations ---
  getReservations(): Reservation[] {
    return this.reservations;
  }

  addReservation(reservation: Reservation): void {
    reservation.id = this.reservations.length + 1;
    reservation.reservationDate = new Date();
    this.reservations.push(reservation);
  }

  getAvailableSeats(busId: number): number {
    const bus = this.getBusById(busId);
    const booked = this.getTicketsByBusId(busId).length;
    return bus ? bus.capacity - booked : 0;
  }





}
