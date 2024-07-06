import styled from '@emotion/styled'

import Grid from '~/components/Grid';
import Header from '~/components/Header'
import Text from '~/components/Text';

const HomeBanner = styled(Grid)`
  height: calc(100vh - 120px); // full page - header
  background-image: url("/julia-banner.png");
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: auto 200vh;
  align-items: flex-end;
  overflow-x: hidden;
  position: relative;
  display: flex;
`

const Marquee = styled(Text.H1)`
  animation: marquee 20s linear infinite;
  transform: translateX(0);
  position: absolute;
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
`

export default function HomePage() {
  return (
    <Grid bg='LIGHT' gap='0'>
      <Header />
      <HomeBanner>
        <Marquee>
          • Julia Santos - UX Designer • Julia Santos - UX Designer •
        </Marquee>
      </HomeBanner>
    </Grid>
  );
}
