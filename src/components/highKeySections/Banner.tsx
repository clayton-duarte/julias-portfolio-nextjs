import Image from 'next/image';

import highKeyBanner from '~/assets/high-key-banner.png';

import { ButtonLink } from '../Button';
import Grid from '../Grid';
import SectionContainer from '../SectionContainer';
import Text from '../Text';

export default function BannerSection() {
  return (
    <SectionContainer>
      <Grid
        lg="minmax(auto, 620px) minmax(auto, 430px)"
        gap="2rem"
        p="0 0 126px 0"
        align="center"
        justify="center"
      >
        <Image
          src={highKeyBanner}
          alt="high-key-app"
          priority
        />
        <Grid
          gap="2rem"
          xs="auto"
          xsP="1rem"
        >
          <Text.H1 color="PRIMARY">Case Study -HighKey App</Text.H1>
          <Text.H4
            m="0 0 120px 0"
            bold={false}
          >
            HighKey app helps users to mix and match outfits while they can
            check their wearing habits.
          </Text.H4>
          <ButtonLink
            href="https://www.figma.com/proto/KXwEXl2lgDMzls0IY8lJtf/Untitled?page-id=818%3A1726&node-id=858-1855&viewport=-5982%2C-285%2C0.63&t=4kejvgEy3uAgKeoK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=858%3A1778&show-proto-sidebar=1"
            target="_blank"
            size="24px"
          >
            View the prototype
          </ButtonLink>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}
