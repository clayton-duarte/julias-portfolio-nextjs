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
      bg="RED"
      color="WHITE"
      p="3rem 0"
    >
      <Grid
        container
        gap="3rem"
        p="3rem"
      >
        <Grid
          gap="2rem"
          justify="center"
          p="2rem 0"
          xs="minmax(auto, 450px)"
        >
          <Text.H5
            align="center"
          >
            Tarot Cards of Tech
          </Text.H5>
          <Text
            align="center"
          >
            helps all of us think bigger picture and longer term about the
            products we create and their effect on the world.
          </Text>
        </Grid>

        <Grid
          gap="3rem"
          justify="space-evenly"
          m="5rem 0"
          xs="minmax(auto, 370px) minmax(auto, 370px)"
        >
          <StyledImage
            priority
            alt="Tarot Face"
            src={tarotFace}
          />
          <StyledImage
            priority
            alt="Tarot Face"
            src={tarotVerse}
          />
        </Grid>

        <Grid
          gap="2rem"
          justify="center"
        >
          <Text.H5
            bold={false}
          >
            For now, the app does not have social features, but in the future,
            it will. So, considering ways a bad actor could misuse the app
            includes harassment, sending abusive messages to other users, and
            tracking user habits without consent.
          </Text.H5>
          <Text.H5
            bold={false}
          >
            To prevent these dangerous behaviors, the app could implement robust
            reporting and moderation systems, ensure transparent privacy
            policies, and obtain user consent.
          </Text.H5>
        </Grid>
      </Grid>
    </Grid>
  );
}
