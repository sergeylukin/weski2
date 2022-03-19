import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { useHotels } from '@namespace/front-website/data-access-hotels';
import { Hotel, Resort } from '@namespace/api-interfaces';
import { mock as resorts } from '../resorts';

/* eslint-disable-next-line */
export interface FrontWebsiteFeatureHotelsSearchFormProps {
  setHotels: (hotels: Hotel[]) => void;
}

const StyledFrontWebsiteFeatureHotelsSearchForm = styled.div`
  color: pink;
`;

export function FrontWebsiteFeatureHotelsSearchForm(
  props: FrontWebsiteFeatureHotelsSearchFormProps
) {
  const { setHotels } = props;
  const [resort, setResort] = useState(1);
  const [fromDate, setFromDate] = useState('03/04/2022');
  const [toDate, setToDate] = useState('03/11/2022');
  const [groupSize, setGroupSize] = useState(2);
  const hotels = useHotels(String(resort), fromDate, toDate, groupSize);

  useEffect(() => {
    setHotels(hotels);
  }, [hotels, setHotels]);

  return (
    <StyledFrontWebsiteFeatureHotelsSearchForm>
      <h1>Welcome to FrontWebsiteFeatureHotelsSearchForm!</h1>
      <select onChange={(ev) => setResort(parseInt(ev.target.value, 10))}>
        {resorts.map((resort: Resort) => (
          <option value={String(resort.id)}>{resort.name}</option>
        ))}
      </select>
    </StyledFrontWebsiteFeatureHotelsSearchForm>
  );
}

export default FrontWebsiteFeatureHotelsSearchForm;
