import { Injectable } from '@nestjs/common';

import { mock } from './mock';

@Injectable()
export class OffersService {
  findAll({ resort, from_date, to_date, group_size }) {
    console.log(resort, from_date, to_date, group_size);
    return mock.accomodations;
  }
}
