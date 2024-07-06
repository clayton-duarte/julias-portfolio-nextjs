import styled from '@emotion/styled'

import Grid from '~/components/Grid';
import Header from '~/components/Header'
import Text from '~/components/Text';

const HomeBanner = styled(Grid)`
  height: calc(100vh - 130px); // full page - header
  background-image: url("/julia-banner.png");
  background-position-y: bottom;
  background-size: auto 100vh;
  background-repeat: no-repeat;
  background-position: center;
  align-items: flex-end;
  overflow-x: hidden;
  position: relative;
  display: flex;
`

const Marquee = styled(Text.H1)`
  text-shadow: 0 0 1px ${props => props.theme.WHITE};
  animation: marquee 20s linear infinite;
  transform: translateX(0);
  position: absolute;
  bottom: 0;
  white-space: nowrap;
  font-weight: 400;
  font-size: 200px;
  width: 41ch;
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
        <Marquee>• Julia Santos - UX Designer • Julia Santos - UX Designer •</Marquee>
      </HomeBanner>
    </Grid>
  );
}
