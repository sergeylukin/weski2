import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { mock } from './mock';
import { Hotel } from '@namespace/api-interfaces';

const USE_MOCK = false;
const URL =
  'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator';
const MAX_GROUP_SIZE = 4;

@Injectable()
export class OffersService {
  async findAll({ resort, from_date, to_date, group_size }): Promise<Hotel[]> {
    if (USE_MOCK) {
      return mock.accomodations.map((hotel) => ({
        id: uuidv4(),
        name: hotel.HotelName,
      }));
    } else {
      const requests = Array.from(Array(MAX_GROUP_SIZE - group_size + 1)).map(
        (nil, n) => {
          const request_group_size = MAX_GROUP_SIZE - n;
          return axios.post(
            URL,
            JSON.stringify({
              query: {
                ski_site: resort,
                from_date: from_date,
                to_date: to_date,
                group_size: request_group_size,
              },
            })
          );
        }
      );

      return Promise.all(requests).then(function (results) {
        const data = results.reduce(
          (acc, response): any => {
            acc.final = [
              ...acc.final,
              ...response.data.body.accommodations.filter((hotel) => {
                if (!acc.hotels.hasOwnProperty(hotel.HotelCode)) {
                  acc.hotels[hotel.HotelCode] = null;
                  return true;
                }
                return false;
              }),
            ];
            return acc;
          },
          {
            hotels: {},
            final: [],
          }
        );
        return data.final.map(unnormalizedHotel => ({
          id: unnormalizedHotel.HotelCode,
          name: unnormalizedHotel.HotelName,
        });
      });
    }
  }
}
