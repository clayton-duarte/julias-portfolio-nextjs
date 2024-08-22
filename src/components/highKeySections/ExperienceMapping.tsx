import Image from 'next/image';

import experienceMapping from '~/assets/experience-mapping.png';
import { Text } from '~/components/Text';

import Grid from '../Grid';

export default function ExperienceMapping() {
  return (
    <>
      <Grid
        container
        p="1rem 3rem"
      >
        <Text.H4
          m="3rem 0 0 0"
          color="PRIMARY"
        >
          Experience Mapping
        </Text.H4>
      </Grid>
      <Grid
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
      </Grid>
      <Grid
        bg="PRIMARY"
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
      </Grid>
    </>
  );
}
