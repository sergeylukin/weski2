import { useState, useEffect } from 'react';
import axios from 'axios';

import { Hotel, API_URL } from '@namespace/api-interfaces';

const model = 'offers';

const getUrl = () => `${API_URL}${model}`;

const findBy = async (
  resort: string,
  from_date: string,
  to_date: string,
  group_size: number
) =>
  await axios.get(
    `${getUrl()}?resort=${resort}&from_date=${from_date}&to_date=${to_date}&group_size=${group_size}`
  );

export function useHotels(resort, from_date, to_date, group_size) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    if (resort && from_date && to_date && group_size) {
      findBy(resort, from_date, to_date, group_size)
        .then((r) => r.json())
        .then(setHotels);
    }
  }, [resort, from_date, to_date, group_size]);
  return hotels;
}

export const hotelsApi = {
  useHotels,
};

export default useHotels;
