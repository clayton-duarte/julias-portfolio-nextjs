import Image from 'next/image'
import Link from 'next/link';

import moodboard from '~/assets/moodboard.png'
import typography from '~/assets/typography.png'
import wordmark from '~/assets/wordmark.png'

import Grid from "../Grid";
import Text from "../Text";

export default function MoodboardBranding() {
  return (
    <Grid container p='3rem'>
      <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Wordmark</Text.H4>
      <Grid xs='minmax(auto, 936px)' m="3rem 0" gap="2rem">
        <Text.H4 bold={false}>
          I tried to create the wordmark through some sketches, but it was not the path I wanted to follow.
        </Text.H4>
        <Text.H4 bold={false}>
          I initially envisioned the wordmark to be clean, minimal, and geometric, but my sketches leaned towards a more organic style. So, I went back to the laptop and started testing using guiding lines.
        </Text.H4>
      </Grid>
      <Grid justify="center" xs='minmax(auto, 1fr)'>
        <Image
          src={wordmark}
          alt='high-key-app'
          priority
        />
      </Grid>
      <Grid xs='minmax(auto, 768px)' m="3rem 0">
        <Text.H5 bold={false}>
          For the brand wordmark and overall typography, I selected the Jost font, a geometric sans-serif typeface inspired by Futura, specifically designed for optimal screen readability.        </Text.H5>
      </Grid>
      <Grid justify="center" xs='minmax(auto, 1fr)' gap='3rem'>
        <Image
          src={typography}
          alt='high-key-app'
          priority
        />
        <Image
          src={moodboard}
          alt='high-key-app'
          priority
        />
      </Grid>
      <Link target='__blank' href="https://www.figma.com/design/mLbMNuRlPPfixgpWu1Vh5H/MoodBoard?node-id=0-1&t=ry8bEd10jl6NFd1N-0">
        <Text.H6 bold={false} m='3rem' align='center'>
          View the full UI Library and Design System here.
        </Text.H6>
      </Link>
    </Grid>
  )
}