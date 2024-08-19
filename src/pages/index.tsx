import Image from 'next/image';

import styled from '@emotion/styled'

import highkeyCellphone_1 from '~/assets/highkey-cellphone-1.png'
import Button from '~/components/Button';
import Grid from '~/components/Grid';
import Header, { HEADER_HEIGHT } from '~/components/Header'
import Text from '~/components/Text';

const HomeBanner = styled(Grid)`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  height: calc(100vh - ${HEADER_HEIGHT});
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
    <Grid bg='WHITE' gap='0'>
      <Header />
      <HomeBanner>
        <Marquee>
          • Julia Santos - UX Designer • Julia Santos - UX Designer •
        </Marquee>
      </HomeBanner>
      <Grid bg='RED' color='WHITE' p="120px 0">
        <Grid container xs='minmax(auto, 528px) minmax(auto, 322px)' gap="95px">
          <Image
            src={highkeyCellphone_1}
            alt="highkey-cellphone"
            priority
          />
          <Grid gap='48px' p='100px 0 0 0'>
            <Grid gap='0'>
              <Text.H2>HighKey</Text.H2>
              <Text.P>UX/UI Design, UX Research, Case Study</Text.P>
            </Grid>
            <Text.P size='24px'>Helping users check their wearing habits while mixing and matching outfits.</Text.P>
            <Button>View project</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
