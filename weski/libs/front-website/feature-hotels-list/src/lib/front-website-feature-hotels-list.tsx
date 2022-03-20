import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FrontWebsiteFeatureHotelsListProps {}

const StyledFrontWebsiteFeatureHotelsList = styled.div`
  color: pink;
`;

export function FrontWebsiteFeatureHotelsList(
  props: FrontWebsiteFeatureHotelsListProps
) {
  return (
    <StyledFrontWebsiteFeatureHotelsList>
      <h1>Welcome to FrontWebsiteFeatureHotelsList!</h1>
    </StyledFrontWebsiteFeatureHotelsList>
  );
}

export default FrontWebsiteFeatureHotelsList;
