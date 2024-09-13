import Image from 'next/image';

import experienceMap from './assets/experience-mapping.png';
import BigQuote from '../shared/BigQuote';
import Grid from '../shared/Grid';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

export default function ExperienceMapping() {
  return (
    <>
      <SectionContainer>
        <Text.H4
          color="RED"
          m="3rem 0 0 0"
        >
          Experience Mapping
        </Text.H4>
        <Text.P>
          By mapping what users are doing, feeling, and thinking while managing their wardrobes and purchasing clothes, I identified design opportunities that allow for a more holistic evaluation of potential tools and features.
        </Text.P>
        <Image
          priority
          alt="high-key-app"
          src={experienceMap}
        />
      </SectionContainer>
      {/* <Grid
        xsP="1rem"
        lgP="0"
        justify="center"
        xs="minmax(auto, 1100px)"
        m="0 0 6rem 0"
      >
        <Image
          src={experienceMapping}
          alt="high-key-app"
          priority
        />
      </Grid> */}
      {/* <Grid
        bg="RED"
        color="WHITE"
      >
        <Grid
          container
          p="3rem"
        >
          <Text.H5 bold={false}>
            I decided to focus on when the user is{' '}
            <Text.Strong>most stressed</Text.Strong>, which is when they are{' '}
            <Text.Strong>checking their wardrobe</Text.Strong>. Once users check
            their wardrobe, feelings of{' '}
            <Text.Strong>“nothing to wear”</Text.Strong> or{' '}
            <Text.Strong>“clothing pieces that doesn’t match”</Text.Strong> are
            constant.
          </Text.H5>
        </Grid>
      </Grid> */}
      <BigQuote>
        I decided to focus on when the user is most stressed and disappointed, which is when they are checking their wardrobe. Once users check their wardrobe, feelings of ‘nothing to wear’ or ‘clothing pieces that don’t match’ are constant.
      </BigQuote>
    </>
  );
}
