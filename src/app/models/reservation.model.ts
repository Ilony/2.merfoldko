export interface Reservation {
  id: number;
  busId: number;
  passengerName: string;
  passengerEmail: string;
  seatCount: number;
  reservationDate: Date;
}