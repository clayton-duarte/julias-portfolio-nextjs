import Image from 'next/image';
import Link from 'next/link';

import trendDown from '~/assets/trend-down.svg';

import Grid from '../Grid';
import Text from '../Text';

export default function SecondaryResearch() {
  return (
    <>
      <Grid
        container
        gap="120px"
        p="3rem"
      >
        <Text.H3 color="RED" align='center'>
          Gen Z demonstrates an environmentally friendly mindset. However...
        </Text.H3>
        {/* ROW */}
        <Grid
          md="repeat(3, minmax(auto, 220px))"
          justify="space-between"
          align='center'
          gap="4.5rem"
        >
          {/* COL 1 */}
          <Grid>
            <Text.H2 color="PRIMARY">
              7 to 10
            </Text.H2>
            <Text.H5 bold={false}>
              The <Text.Strong color="PRIMARY">number of times</Text.Strong> a
              garment is worn before being <Text.Strong color="PRIMARY">tossed</Text.Strong>.
            </Text.H5>
          </Grid>
          {/* COL 2 */}
          <Grid>
            <Grid
              xs="60px auto"
              align="end"
              gap="22px"
            >
              <Image
                src={trendDown}
                alt="high-key-app"
                priority
              />
              <Text.H2 color="PRIMARY">36%</Text.H2>
            </Grid>
            <Text.H5 bold={false}>
              The <Text.Strong color="PRIMARY">number of times</Text.Strong> a
              garment is worn has{' '}
              <Text.Strong color="PRIMARY">declined</Text.Strong> in 15 years.
            </Text.H5>
          </Grid>
          {/* COL 3 */}
          <Grid>
            <Text.H2 color="PRIMARY">
              500 M
            </Text.H2>
            <Text.H5 bold={false}>
              Kilograms of fabric items are toss away in Canada per year.
            </Text.H5>
          </Grid>
        </Grid>
        {/* SOURCES */}
        <Grid m="5rem 0">
          <Text align="center">
            Sources:{' '}
            <Link
              target="_blank"
              href="https://earth.org/statistics-about-fast-fashion-waste/"
            >
              Earth.org
            </Link>
            ,{' '}
            <Link
              target="_blank"
              href="https://ecocart.io/gen-z-spending-habits/"
            >
              EcoCart
            </Link>
            ,{' '}
            <Link
              target="_blank"
              href="https://globalnews.ca/news/9430446/textile-waste-fast-fashion-ontario-research-recylcle/"
            >
              GlobalNews
            </Link>
          </Text>
        </Grid>
      </Grid>
      {/* SECTION */}
      < Grid
        bg="PRIMARY"
        color="WHITE"
        p="3rem 0"
      >
        <Grid
          container
          p="75px 24px"
        >
          <Text.H4>
            After reviewing the available data, I decided to gain a deeper understanding of how young Canadian adults approach purchasing and donating clothes before proposing any solutions. In order to identify potential issues, I conducted one-on-one interviews with participants to explore their experiences on these topics.
          </Text.H4>
        </Grid>
      </Grid>
    </>
  );
}
