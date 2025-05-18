// components/passenger-list/passenger-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { Passenger } from '../../models/passanger.model';
import { DataService } from '../../services/data.service';
import { FullNamePipe } from '../../pipes/full-name.pipe';

@Component({
  selector: 'app-passenger-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    FullNamePipe
  ],
  templateUrl: './passenger-list.component.html'
})
export class PassengerListComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.passengers = this.dataService.getPassengers();
  }
}
