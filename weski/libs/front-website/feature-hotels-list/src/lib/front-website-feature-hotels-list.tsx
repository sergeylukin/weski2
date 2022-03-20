import styled from '@emotion/styled';

import { Hotel } from '@namespace/api-interfaces';

/* eslint-disable-next-line */
export interface FrontWebsiteFeatureHotelsListProps {
  hotels: Hotel[];
}

const StyledFrontWebsiteFeatureHotelsList = styled.div`
  color: pink;
`;

export function FrontWebsiteFeatureHotelsList(
  props: FrontWebsiteFeatureHotelsListProps
) {
  const { hotels } = props;

  return (
    <StyledFrontWebsiteFeatureHotelsList>
      <h1>Welcome to FrontWebsiteFeatureHotelsList!</h1>
      {Array.isArray(hotels) &&
        hotels.map((hotel) => <div key={hotel.id}>{hotel.name}</div>)}
    </StyledFrontWebsiteFeatureHotelsList>
  );
}

export default FrontWebsiteFeatureHotelsList;
