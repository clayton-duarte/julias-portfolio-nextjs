import Image from 'next/image';

import styled from '@emotion/styled'

import juliaBanner from '~/assets/julia-banner.png';
import Grid from '~/components/Grid';
import Header from '~/components/Header'
import Text from '~/components/Text';

const HomeBanner = styled(Grid)`
  height: calc(100vh - 120px); // full page - header
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
        <Grid xs="minmax(auto, calc(100vh - 300px))" justify='center'>
          <Image src={juliaBanner} alt='Julia Santos' priority />
        </Grid>
      </HomeBanner>
    </Grid>
  );
}
