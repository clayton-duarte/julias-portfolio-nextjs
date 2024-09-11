import styled from '@emotion/styled';

import HightKeySection from '~/components/homeSections/HightKeySection';
import KijijiSection from '~/components/homeSections/KijijiSection';
import Footer from '~/components/shared/Footer';
import Grid from '~/components/shared/Grid';
import Header, { HEADER_HEIGHT } from '~/components/shared/Header';
import Text from '~/components/shared/Text';

const HomeBanner = styled(Grid)`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  height: calc(100vh - ${HEADER_HEIGHT});
  background-image: url('/julia-banner.png');
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: auto 200vh;
  align-items: flex-end;
  overflow-x: hidden;
  position: relative;
  display: flex;
`;

const Marquee = styled(Text.H1)`
  animation: marquee 20s linear infinite;
  transform: translateX(0);
  white-space: nowrap;
  font-weight: 400;
  font-size: 200px;
  width: 41ch;
  bottom: 0;
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-21.5ch);
    }
  }
`;

export default function HomePage() {
  return (
    <Grid
      bg="WHITE"
      gap="0"
    >
      <Header />
      <HomeBanner>
        <Marquee>
          • Julia Santos - UX Designer • Julia Santos - UX Designer •
        </Marquee>
      </HomeBanner>
      <HightKeySection />
      <KijijiSection />
      <Footer />
    </Grid>
  );
}
