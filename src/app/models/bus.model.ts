export interface Bus {
  id: number;
  busNumber: string;
  origin: string;
  destination: string;
  departureTime: Date;
  capacity: number;
  type: string;  
}