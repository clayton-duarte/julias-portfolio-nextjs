import Image from 'next/image';

import styled from '@emotion/styled';

import tarotFace from './assets/tarot-face.png';
import tarotVerse from './assets/tarot-verse.png';
import Grid from '../shared/Grid';
import Text from '../shared/Text';

const StyledImage = styled(Image)`
  border-radius: 2rem;
`;

export default function TarotCards() {
  return (
    <Grid
      bg="PRIMARY"
      color="WHITE"
      p="3rem 0"
    >
      <Grid
        container
        p="3rem"
        gap="3rem"
      >
        <Grid
          p="2rem 0"
          justify="center"
          xs="minmax(auto, 450px)"
          gap="2rem"
        >
          <Text.H5 align="center">Tarot Cards of Tech</Text.H5>
          <Text align="center">
            helps all of us think bigger picture and longer term about the
            products we create and their effect on the world.
          </Text>
        </Grid>

        <Grid
          m="5rem 0"
          xs="minmax(auto, 370px) minmax(auto, 370px)"
          justify="space-evenly"
          gap="3rem"
        >
          <StyledImage
            src={tarotFace}
            alt="Tarot Face"
            priority
          />
          <StyledImage
            src={tarotVerse}
            alt="Tarot Face"
            priority
          />
        </Grid>

        <Grid
          justify="center"
          gap="2rem"
        >
          <Text.H5 bold={false}>
            For now, the app does not have social features, but in the future,
            it will. So, considering ways a bad actor could misuse the app
            includes harassment, sending abusive messages to other users, and
            tracking user habits without consent.
          </Text.H5>
          <Text.H5 bold={false}>
            To prevent these dangerous behaviors, the app could implement robust
            reporting and moderation systems, ensure transparent privacy
            policies, and obtain user consent.
          </Text.H5>
        </Grid>
      </Grid>
    </Grid>
  );
}
