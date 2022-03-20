import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { mock } from './mock';

@Injectable()
export class OffersService {
  findAll({ resort, from_date, to_date, group_size }) {
    return mock.accomodations.map((hotel) => ({
      id: uuidv4(),
      name: hotel.HotelName,
    }));
  }
}
