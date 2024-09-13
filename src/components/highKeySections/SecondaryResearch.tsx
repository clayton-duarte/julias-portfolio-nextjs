import Image from 'next/image';
import Link from 'next/link';

import trendDown from './assets/trend-down.svg';
import BigQuote from '../shared/BigQuote';
import Grid from '../shared/Grid';
import Text from '../shared/Text';

export default function SecondaryResearch() {
  return (
    <>
      <Grid
        container
        gap="120px"
        p="3rem"
      >
        <Text.H3
          align="center"
          color="RED"
        >
          Gen Z demonstrates an environmentally friendly mindset. However...
        </Text.H3>
        {/* ROW */}
        <Grid
          align="center"
          gap="4.5rem"
          justify="space-between"
          md="repeat(3, minmax(auto, 220px))"
        >
          {/* COL 1 */}
          <Grid>
            <Text.H2
              color="RED"
            >
              7 to 10
            </Text.H2>
            <Text.H5
              bold={false}
            >
              The 
              {' '}
              <Text.Strong
                color="RED"
              >
                number of times
              </Text.Strong>
              {' '}
              a
              garment is worn before being 
              {' '}
              <Text.Strong
                color="RED"
              >
                tossed
              </Text.Strong>
              .
            </Text.H5>
          </Grid>
          {/* COL 2 */}
          <Grid>
            <Grid
              align="end"
              gap="22px"
              xs="60px auto"
            >
              <Image
                priority
                alt="high-key-app"
                src={trendDown}
              />
              <Text.H2
                color="RED"
              >
                36%
              </Text.H2>
            </Grid>
            <Text.H5
              bold={false}
            >
              The 
              {' '}
              <Text.Strong
                color="RED"
              >
                number of times
              </Text.Strong>
              {' '}
              a
              garment is worn has
              {' '}
              <Text.Strong
                color="RED"
              >
                declined
              </Text.Strong>
              {' '}
              in 15 years.
            </Text.H5>
          </Grid>
          {/* COL 3 */}
          <Grid>
            <Text.H2
              color="RED"
            >
              500 M
            </Text.H2>
            <Text.H5
              bold={false}
            >
              Kilograms of fabric items are toss away in Canada per year.
            </Text.H5>
          </Grid>
        </Grid>
        {/* SOURCES */}
        <Grid
          m="5rem 0"
        >
          <Text
            align="center"
          >
            Sources:
            {' '}
            <Link
              href="https://earth.org/statistics-about-fast-fashion-waste/"
              target="_blank"
            >
              Earth.org
            </Link>
            ,
            {' '}
            <Link
              href="https://ecocart.io/gen-z-spending-habits/"
              target="_blank"
            >
              EcoCart
            </Link>
            ,
            {' '}
            <Link
              href="https://globalnews.ca/news/9430446/textile-waste-fast-fashion-ontario-research-recylcle/"
              target="_blank"
            >
              GlobalNews
            </Link>
          </Text>
        </Grid>
      </Grid>
      {/* SECTION */}
      <BigQuote>
        After reviewing the available data, I decided to gain a deeper understanding of how young Canadian adults approach purchasing and donating clothes before proposing any solutions. In order to identify potential issues, I conducted one-on-one interviews with participants to explore their experiences on these topics.
      </BigQuote>
    </>
  );
}
