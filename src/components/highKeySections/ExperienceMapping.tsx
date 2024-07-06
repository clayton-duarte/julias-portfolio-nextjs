import Image from "next/image";

import { Text } from '~/components/Text';

import Grid from "../Grid";
import Hr from "../Hr";

export default function ExperienceMapping() {
  return (
    <>
      <Grid container p='3rem'>
        <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Experience Mapping</Text.H4>
        <Hr />
      </Grid>
      <Grid justify="center" xs='auto' m='0 0 3rem 0'>
        <Image
          src="/experience-mapping.png"
          alt="high-key-app"
          width={1130}
          height={1300}
          priority
        />
      </Grid>
      <Grid bg='PRIMARY' color="WHITE">
        <Grid container p='3rem'>
          <Text.H5 bold={false}>
            I decided to focus on when the user is{' '}
            <Text.Strong>most stressed</Text.Strong>,{' '}
            which is when they are{' '}
            <Text.Strong>checking their wardrobe</Text.Strong>.{' '}
            Once users check their wardrobe, feelings of{' '}
            <Text.Strong>“nothing to wear”</Text.Strong>{' '}
            or{' '}
            <Text.Strong>“clothing pieces that doesn’t match”</Text.Strong>{' '}
            are constant.
          </Text.H5>
        </Grid>
      </Grid>
    </>
  )
}