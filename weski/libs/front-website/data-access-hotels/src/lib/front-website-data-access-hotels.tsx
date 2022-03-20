import { useState, useEffect } from 'react';
import { Hotel } from '@namespace/api-interfaces';

export function useHotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    fetch('/api/hotes')
      .then((r) => r.json())
      .then(setHotels);
  }, []);
  return games;
}

export default FrontWebsiteDataAccessHotels;
