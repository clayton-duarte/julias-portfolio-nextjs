import Image from 'next/image';

import { ButtonLink } from '~/components/shared/Button';
import Grid from '~/components/shared/Grid';
import Text from '~/components/shared/Text';

import highkeyCellphone_1 from './assets/highkey-cellphone-1.png';

export default function HightKeySection() {
  return (
    <Grid
      bg="RED"
      color="WHITE"
      p="120px 0"
    >
      <Grid
        container
        gap="120px"
        xs="minmax(auto, 528px) minmax(auto, 322px)"
      >
        <Image
          priority
          alt="highkey-cellphone"
          src={highkeyCellphone_1}
        />
        <Grid
          gap="48px"
          p="100px 0 0 0"
        >
          <Grid
            gap="0"
          >
            <Text.H2>
              HighKey
            </Text.H2>
            <Text.P>
              UX/UI Design, UX Research, Case Study
            </Text.P>
          </Grid>
          <Text.P
            size="24px"
          >
            Helping users check their wearing habits while mixing and matching
            outfits.
          </Text.P>
          <ButtonLink
            outlined
            href="/work/highkey-app-case-study"
          >
            View project
          </ButtonLink>
        </Grid>
      </Grid>
    </Grid>
  );
}
