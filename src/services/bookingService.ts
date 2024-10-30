import axiosRequest from "../plugins/request";
import { IBooking } from "../types/booking.types";
import { IBaseResponse } from "../types/response.types";

class BookingService {
  private _prefixURL = "/v1/booking";

  public async createBooking(data: Record<string, any>): Promise<IBaseResponse<IBooking>> {
    try {
      const rs = await axiosRequest.post(this._prefixURL, data);
      return Promise.resolve(rs.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

}

export default new BookingService();