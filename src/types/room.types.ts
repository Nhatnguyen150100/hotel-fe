export interface IRoom {
  id: string;
  name: string;
  description: string | null;
  bedType: string | null;
  acreage: number | null;
  normalDayPrice: number | null;
  weekendPrice: number | null;
  holidayPrice: number | null;
  facilitiesRooms?: IFacilitiesRooms[];
  img_1: string | null;
  img_2: string | null;
  img_3: string | null;
  img_4: string | null;
  img_5: string | null;
  img_6: string | null;
}

interface IFacilitiesRooms {
  id: number;
  roomId: string;
  facilityId: string;
  createdAt: string;
  updatedAt: string;
}
