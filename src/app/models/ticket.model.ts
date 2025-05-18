// models/ticket.model.ts
export interface Ticket {
  id: number;
  price: number;    // magyarul: ar
  issueDate: Date;  // magyarul: datum
  seatNumber: number;
  passengerId: number;
  busId: number;
}
