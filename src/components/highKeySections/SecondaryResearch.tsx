import Image from "next/image";
import Link from 'next/link';

import trendDown from '~/assets/trend-down.svg';

import Grid from '../Grid';
import Text from '../Text';

export default function SecondaryResearch() {
  return (
    <>
      <Grid container gap='3rem' p='3rem'>
        <Text.H4 color='PRIMARY'>Secondary Research</Text.H4>
        <Grid gap='2rem'>
          <Text.H5 bold={false}>Statistics from Earth.org suggests that the frequency of wearing a piece of clothing has{' '}
            <Text.Strong color='PRIMARY'>significantly declined over the years</Text.Strong>{' '}
            contributing to the throwaway culture and, consequently, to the harmful effects on the environment.
          </Text.H5>
        </Grid>
        <Grid lg='1fr 1.2fr' justify='space-between' gap='4.5rem'>
          <Grid>
            <Grid xs='80px auto' gap='2rem' align="center">
              <Image
                src={trendDown}
                alt="high-key-app"
                priority
              />
              <Text.H1 color='PRIMARY'>36%</Text.H1>
            </Grid>
            <Text.H5 bold={false}>
              The{' '}
              <Text.Strong color='PRIMARY'>number of times</Text.Strong>{' '}
              a garment is worn has{' '}
              <Text.Strong color='PRIMARY'>declined</Text.Strong>{' '}
              in 15 years.
            </Text.H5>
          </Grid>
          <Grid>
            <Text.H3 color='PRIMARY'>Gen Z<br />spending habits</Text.H3>
            <Text.H5 bold={false}>
              show they care the most about fashion, makeup and beauty products, technology, and their pets.
            </Text.H5>
          </Grid>
        </Grid>
        <Grid m='5rem 0'>
          <Text align='center'>Sources:{' '}
            <Link target='_blank' href='https://earth.org/statistics-about-fast-fashion-waste/'>
              Earth.org
            </Link>,{' '}
            <Link target='_blank' href='https://ecocart.io/gen-z-spending-habits/'>
              EcoCart
            </Link>
          </Text>
        </Grid>
      </Grid>
      <Grid bg='PRIMARY' color='WHITE' p='3rem 0'>
        <Grid container p='0 3rem'>
          <Text.H5 bold={false}>
            After looking at some existing data, I wanted to find out why people are wearing their clothes less often, even though Gen Z, the generation that buys the most fashion, knows a lot about environmental issues. To understand this better, I talked to three Gen Z individuals living in Toronto who use social media for outfit inspiration.
          </Text.H5>
        </Grid>
      </Grid>
    </>
  )
}