import { useState } from 'react';
import styled from '@emotion/styled';

import { FrontWebsiteFeatureHotelsList as HotelsList } from '@namespace/front-website/feature-hotels-list';
import { Hotel } from '@namespace/api-interfaces';
import { FrontWebsiteFeatureHotelsSearchForm as SearchForm } from '@namespace/front-website/feature-hotels-search-form';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

export function Home(props: HomeProps) {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  return (
    <StyledHome>
      <SearchForm setHotels={setHotels} />
      <HotelsList hotels={hotels} />
    </StyledHome>
  );
}

export default Home;
