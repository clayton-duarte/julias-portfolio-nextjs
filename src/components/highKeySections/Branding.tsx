import Image from 'next/image';
import Link from 'next/link';

import moodboard from './assets/moodboard.png';
import navbarOld2 from './assets/navbar-old2.png';
import navbarOld from './assets/navibar-old.png';
import onboarding from './assets/onboarding1.png';
import typography from './assets/typography.png';
import wordmark from './assets/wordmark.png';
import BigQuote from '../shared/BigQuote';
import Grid from '../shared/Grid';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

export default function BrandingSection() {
  return (
    <>
      <BigQuote>
        Bringing Ideas to reality...
      </BigQuote>
      <SectionContainer>
        <Grid
          gap="64px"
          xs="minmax(auto, 527px)"
        >
          <Text.H4
            color="RED"
          >
            UI Inspiration & Branding Creation
          </Text.H4>
          <Text>
            I drew inspiration from UI elements of both direct competitors (virtual closet apps) and indirect ones (social media platforms like Instagram and Pinterest) to craft the app&apos;s unique identity.
          </Text>
        </Grid>

        <Grid
          align="end"
          md="auto auto"
          p="32px 0 200px 0"
        >
          <Grid
            align="end"
            gap="32px"
            xs="minmax(auto, 256px) auto"
          >
            <Grid>
              <Image
                priority
                alt="high-key-app"
                src={navbarOld}
              />
              <Image
                priority
                alt="high-key-app"
                src={navbarOld2}
              />
            </Grid>
            <Text
              bold
            >
              For the Nav bar the idea was to focus on critical pages such as the Home page, Closet/Wardrobe and the possibility of editing.
            </Text>
          </Grid>
          <Grid
            align="end"
            gap="32px"
            xs="minmax(auto, auto) auto"
          >
            <Image
              priority
              alt="high-key-app"
              src={onboarding}
            />
            <Text
              bold
            >
              For the Nav bar the idea was to focus on critical pages such as the Home page, Closet/Wardrobe and the possibility of editing.
            </Text>
          </Grid>
        </Grid>
      </SectionContainer>
      <Grid
        container
        p="3rem"
      >
        <Text.H4
          color="RED"
          m="3rem 0 0 0"
        >
          Wordmark
        </Text.H4>
        <Grid
          gap="2rem"
          m="3rem 0"
          xs="minmax(auto, 936px)"
        >
          <Text.H4
            bold={false}
          >
            I tried to create the wordmark through some sketches, but it was not
            the path I wanted to follow.
          </Text.H4>
          <Text.H4
            bold={false}
          >
            I initially envisioned the wordmark to be clean, minimal, and
            geometric, but my sketches leaned towards a more organic style. So, I
            went back to the laptop and started testing using guiding lines.
          </Text.H4>
        </Grid>
        <Grid
          justify="center"
          xs="minmax(auto, 1fr)"
        >
          <Image
            priority
            alt="high-key-app"
            src={wordmark}
          />
        </Grid>
        <Grid
          m="3rem 0"
          xs="minmax(auto, 768px)"
        >
          <Text.H5
            bold={false}
          >
            For the brand wordmark and overall typography, I selected the Jost
            font, a geometric sans-serif typeface inspired by Futura, specifically
            designed for optimal screen readability.
            {' '}
          </Text.H5>
        </Grid>
        <Grid
          gap="3rem"
          justify="center"
          xs="minmax(auto, 1fr)"
        >
          <Image
            priority
            alt="high-key-app"
            src={typography}
          />
          <Image
            priority
            alt="high-key-app"
            src={moodboard}
          />
        </Grid>
        <Link
          href="https://www.figma.com/design/mLbMNuRlPPfixgpWu1Vh5H/MoodBoard?node-id=0-1&t=ry8bEd10jl6NFd1N-0"
          target="_blank"
        >
          <Text.H6
            align="center"
            bold={false}
            m="3rem"
          >
            View the full UI Library and Design System here.
          </Text.H6>
        </Link>
      </Grid>
    </>
  );
}
