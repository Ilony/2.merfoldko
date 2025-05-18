import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Angular Material modulok
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';

// Alkalmazás komponensei, pipe-ok, direktívák
import { AppComponent } from './app.component';
import { BusListComponent } from './components/bus-list/bus-list.component';
import { BusDetailComponent } from './components/bus-detail/bus-detail.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';

import { FullNamePipe } from './pipes/full-name.pipe';
import { HungarianDatePipe } from './pipes/hu-date.pipe';
import { HighlightDirective } from './directives/highlight.directive';

// Szerviz
import { DataService } from './services/data.service';

const routes: Routes = [
  { path: 'busszalista', component: BusListComponent },
  { path: 'buszdetails/:id', component: BusDetailComponent }, // ← javítva "busszdetails"-ről
  { path: 'jegyek', component: TicketListComponent },
  { path: 'foglalas', component: ReservationFormComponent },
  { path: 'utasok', component: PassengerListComponent },
  { path: '', redirectTo: '/busszalista', pathMatch: 'full' }
];

@NgModule({
    imports: [
    AppComponent,
    BusDetailComponent,
    TicketListComponent,
    ReservationFormComponent,
    PassengerListComponent,
    FullNamePipe,
    HungarianDatePipe,
    HighlightDirective,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    // Material modulok
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [DataService],
})
export class AppModule { }
