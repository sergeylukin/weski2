import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Stack, Select } from '@chakra-ui/react';

import { useHotels } from '@namespace/front-website/data-access-hotels';
import { Hotel, Resort } from '@namespace/api-interfaces';
import { mock as resorts } from '../resorts';

/* eslint-disable-next-line */
export interface FrontWebsiteFeatureHotelsSearchFormProps {
  setHotels: (hotels: Hotel[]) => void;
}

const StyledFrontWebsiteFeatureHotelsSearchForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: brand;
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
      <Select
        mr={10}
        placeholder="Resort"
        variant="outline"
        onChange={(ev) => setResort(parseInt(ev.target.value, 10))}
      >
        {resorts.map((resort: Resort) => (
          <option value={String(resort.id)}>{resort.name}</option>
        ))}
      </Select>
      <Select
        mr={10}
        placeholder="From date"
        variant="outline"
        onChange={(ev) => setFromDate(ev.target.value)}
      >
        {['03/04/2022'].map((date: string) => (
          <option value={String(date)}>{date}</option>
        ))}
      </Select>
      <Select
        mr={10}
        placeholder="To date"
        variant="outline"
        onChange={(ev) => setToDate(ev.target.value)}
      >
        {['03/11/2022'].map((date: string) => (
          <option value={String(date)}>{date}</option>
        ))}
      </Select>
      <Select
        mr={10}
        placeholder="Group size"
        variant="outline"
        onChange={(ev) => setGroupSize(parseInt(ev.target.value, 10))}
      >
        {[1, 2, 3, 4].map((size: number) => (
          <option value={String(size)}>{size}</option>
        ))}
      </Select>
    </StyledFrontWebsiteFeatureHotelsSearchForm>
  );
}

export default FrontWebsiteFeatureHotelsSearchForm;
