// components/bus-list/bus-list.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Bus } from '../../models/bus.model';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HighlightDirective
  ],
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent {
  @Input() buses: Bus[] = [];
  @Output() busSelected = new EventEmitter<Bus>();

  onSelect(bus: Bus): void {
    this.busSelected.emit(bus);
  }
}
