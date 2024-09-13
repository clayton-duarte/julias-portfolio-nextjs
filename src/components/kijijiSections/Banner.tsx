import Image from 'next/image';
import React from 'react';

import SectionContainer from '~/components/shared/SectionContainer';
import Text from '~/components/shared/Text';

import kijijiLaptop from './assets/kijiji-laptop.png';
import Grid from '../shared/Grid';

export default function Banner() {
  return (
    <SectionContainer>
      <Text.H1 align="center" color="PURPLE">
        BrainStation x Kijiji
      </Text.H1>
      <Text.H4 align="center" bold={false} m="0 0 80px 0">
        Building Trust and Credibility for Small Businesses on Kijiji.
      </Text.H4>
      <Grid justify="center" xs="minmax(auto, 520px)">
        <Image
          priority
          alt="Pain Points"
          src={kijijiLaptop}
        />
      </Grid>
    </SectionContainer>
  )
} 
