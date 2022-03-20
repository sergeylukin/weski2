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
  return (
    <StyledFrontWebsiteFeatureHotelsList>
      <h1>Welcome to FrontWebsiteFeatureHotelsList!</h1>
      {props.hotels.map((hotel) => <div>{hotel.name}</div>}
    </StyledFrontWebsiteFeatureHotelsList>
  );
}

export default FrontWebsiteFeatureHotelsList;
