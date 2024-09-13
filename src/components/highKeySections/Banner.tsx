import Image from 'next/image';

import highKeyBanner from './assets/high-key-banner.png';
import { ButtonLink } from '../shared/Button';
import Grid from '../shared/Grid';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

export default function BannerSection() {
  return (
    <SectionContainer>
      <Grid
        align="center"
        gap="2rem"
        justify="center"
        lg="minmax(auto, 620px) minmax(auto, 500px)"
        p="0 0 126px 0"
      >
        <Image
          priority
          alt="high-key-app"
          src={highKeyBanner}
        />
        <Grid
          gap="2rem"
          xs="auto"
          xsP="1rem"
        >
          <Text.H1
            color="RED"
          >
            Case Study -HighKey App
          </Text.H1>
          <Text.H4
            bold={false}
            m="0 0 120px 0"
          >
            HighKey app helps users to mix and match outfits while they can
            check their wearing habits.
          </Text.H4>
          <ButtonLink
            href="https://www.figma.com/proto/KXwEXl2lgDMzls0IY8lJtf/Untitled?page-id=818%3A1726&node-id=858-1855&viewport=-5982%2C-285%2C0.63&t=4kejvgEy3uAgKeoK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=858%3A1778&show-proto-sidebar=1"
            size="24px"
            target="_blank"
          >
            View the prototype
          </ButtonLink>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
