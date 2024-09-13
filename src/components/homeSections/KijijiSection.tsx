import Image from 'next/image';

import Button, { ButtonLink } from '~/components/shared/Button';
import Grid from '~/components/shared/Grid';
import Text from '~/components/shared/Text';

import kijijiPng from './assets/kijiji.png';

export default function KijijiSection() {
  return (
    <Grid
      bg="PURPLE"
      color="WHITE"
      p="120px 0"
    >
      <Grid
        container
        align="center"
        gap="100px"
        justify="center"
        xs="minmax(auto, 360px) minmax(auto, 670px)"
      >
        <Grid
          gap="48px"
          p=" 0 0 0"
        >
          <Grid
            gap="0"
          >
            <Text.H2>
              BrainStation X Kijiji
            </Text.H2>
            <Text.P>
              UX/UI Design, Product Design, Design Sprint
            </Text.P>
          </Grid>
          <Text.P
            size="24px"
          >
            A 24-hour hackathon, where the our cross-functional team were tasked
            with designing a solution to help small business and local sellers
            on Kijiji’s platform.
          </Text.P>
          <Button
            disabled
            outlined
            color="PURPLE"
          >
            Coming Soon
          </Button>
          {/* <ButtonLink color='PURPLE' href='/work/highkey-app-case-study'>
            View project
          </ButtonLink> */}
        </Grid>
        <Image
          priority
          alt="highkey-cellphone"
          src={kijijiPng}
        />
      </Grid>
    </Grid>
  );
}
