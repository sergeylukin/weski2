import styled from '@emotion/styled';

import { FrontWebsiteFeatureHotelsList as HotelsList } from '@namespace/front-website/feature-hotels-list';
import { Hotel } from '@namespace/api-interfaces';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

export function Home(props: HomeProps) {
  const [hotels, setHotels] = useState<Hotel>([]);
  return (
    <StyledHome>
      <HotelsSearchForm setHotels={setHotels} />
      <HotelsList hotels={hotels} />
    </StyledHome>
  );
}

export default Home;
