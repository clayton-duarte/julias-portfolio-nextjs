import Image from "next/image";
import Link from 'next/link';

import Container from '../Container';
import Grid from '../Grid';
import Hr from '../Hr';
import Text from '../Text';

export default function SecondaryResearch() {
  return (
    <Container>
      <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Secondary Research</Text.H4>
      <Hr />
      <Grid m='4rem 0' gap='2rem'>
        <Text.H5 bold={false}>A research from FirstInsight shows that 73% of Gen Z{' '}
          <Text.Strong color='PRIMARY'>are willing to pay more for sustainable products</Text.Strong>.
        </Text.H5>
        <Text.H5 bold={false}>However, Statistics from Earth.org suggests that the frequency of wearing a piece of clothing has{' '}
          <Text.Strong color='PRIMARY'>significantly declined over the years</Text.Strong>{' '}
          contributing to the throwaway culture and, consequently, to the harmful effects on the environment.
        </Text.H5>
      </Grid>
      <Grid xs='1fr 1fr 1.2fr' justify='space-between' gap='4.5rem' m='5rem 0'>
        <Grid>
          <Text.H1 color='PRIMARY'>73%</Text.H1>
          <Text.H5 bold={false}>of Gen Z are the most{' '}
            <Text.Strong color='PRIMARY'>willing to pay</Text.Strong>{' '}
            more for{' '}
            <Text.Strong color='PRIMARY'>sustainable products.</Text.Strong>
          </Text.H5>
        </Grid>
        <Grid>
          <Grid xs='auto auto' gap='2rem' align="center">
            <Image
              src="/trend-down.svg"
              alt="high-key-app"
              width={80}
              height={80}
              priority
            />
            <Text.H1 color='PRIMARY'>36% </Text.H1>
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
          <Link target='_blank' href='https://www.firstinsight.com/press-releases/first-insight-finds-expectations-for-sustainable-retail-practices-growing-with-the-rise-of-gen-z-shoppers'>
            FirstInsight
          </Link>,{' '}
          <Link target='_blank' href='https://earth.org/statistics-about-fast-fashion-waste/'>
            Earth.org
          </Link>,{' '}
          <Link target='_blank' href='https://ecocart.io/gen-z-spending-habits/'>
            EcoCart
          </Link>
        </Text>
      </Grid>
    </Container>
  )
}