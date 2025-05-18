// components/reservation-form/reservation-form.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Bus } from '../../models/bus.model';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './reservation-form.component.html'
})
export class ReservationFormComponent implements OnInit {
  @Input() buses: Bus[] = [];
  @Output() reservationSubmitted = new EventEmitter<Reservation>();

  reservationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      passengerName: ['', Validators.required],
      passengerEmail: ['', [Validators.required, Validators.email]],
      busId: ['', Validators.required],
      seatCount: [1, [Validators.required, Validators.min(1)]]
    });
  
    // Szűrés: csak azok a buszok maradnak meg, amik nem undefined és van id-jük
    this.buses = (this.buses || []).filter(bus => !!bus && bus.id !== undefined);
    console.log('Filtered buses:', this.buses);
  }

  submitReservation(): void {
    if (this.reservationForm.valid) {
      const reservation: Reservation = {
        id: 0, // ezt később generálja a szolgáltatás
        busId: this.reservationForm.value.busId,
        passengerName: this.reservationForm.value.passengerName,
        passengerEmail: this.reservationForm.value.passengerEmail,
        seatCount: this.reservationForm.value.seatCount,
        reservationDate: new Date()
      };
      this.reservationSubmitted.emit(reservation);
      this.reservationForm.reset();
    }
  }
}
