import styled from '@emotion/styled';

import { FrontWebsiteFeatureHotelsList as HotelsList } from '@namespace/front-website/feature-hotels-list';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <HotelsList />
    </StyledHome>
  );
}

export default Home;
