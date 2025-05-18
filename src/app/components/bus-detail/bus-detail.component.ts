import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HungarianDatePipe } from '../../pipes/hu-date.pipe'; // ⬅️ Ezt add hozzá!
import { Bus } from '../../models/bus.model';

@Component({
  selector: 'app-bus-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HungarianDatePipe // ⬅️ IDE KELL
  ],
  templateUrl: './bus-detail.component.html',
})
export class BusDetailComponent {
  @Input() bus!: Bus;

  foglal() {
    // Foglalási logika itt
    console.log(`Foglalás indítva a buszra: ${this.bus.busNumber}`);
  }
}
