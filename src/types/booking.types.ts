export interface IBooking {
  id: string;
  roomId: string;
  name: string;
  email: string;
  phoneNumber: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  note: string;
}
