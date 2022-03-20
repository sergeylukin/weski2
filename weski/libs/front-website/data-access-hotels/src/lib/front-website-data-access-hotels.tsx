import { useState, useEffect } from 'react';
import axios from 'axios';

import { Hotel, API_URL } from '@namespace/api-interfaces';

const model = 'offers';

const getUrl = () => `${API_URL}${model}`;

const findBy = async (keyword: string) =>
  await axios.get(`${getUrl()}?keyword=${keyword}`);

export function useHotels(keyword) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    findBy(keyword)
      .then((r) => r.json())
      .then(setHotels);
  }, [keyword]);
  return hotels;
}

export const hotelsApi = {
  useHotels,
};

export default useHotels;
