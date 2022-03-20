import { useState, useEffect } from 'react';
import { Hotel, OFFERS_API_URL } from '@namespace/api-interfaces';

export function useHotels(keyword) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    fetch(OFFERS_API_URL + `?keyword=${keyword}`)
      .then((r) => r.json())
      .then(setHotels);
  }, [keyword]);
  return hotels;
}

export default FrontWebsiteDataAccessHotels;
