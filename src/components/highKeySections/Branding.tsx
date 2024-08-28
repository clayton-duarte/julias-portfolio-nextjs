import Image from 'next/image';

import navbarOld2 from './assets/navbar-old2.png';
import navbarOld from './assets/navibar-old.png';
import onboarding from './assets/onboarding1.png';

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
        <Grid color='RED' xs='minmax(auto, 527px)' gap='64px'>
          <Text.H4>UI Inspiration & Branding Creation</Text.H4>
          <Text>
            I drew inspiration from UI elements of both direct competitors (virtual closet apps) and indirect ones (social media platforms like Instagram and Pinterest) to craft the app&apos;s unique identity.
          </Text>
        </Grid>

        <Grid md='auto auto' color='RED' align='end' p='32px 0 200px 0'>
          <Grid xs='minmax(auto, 256px) auto' align='end' gap='32px'>
            <Grid>
              <Image
                src={navbarOld}
                alt="high-key-app"
                priority
              />
              <Image
                src={navbarOld2}
                alt="high-key-app"
                priority
              />
            </Grid>
            <Text bold>
              For the Nav bar the idea was to focus on critical pages such as the Home page, Closet/Wardrobe and the possibility of editing.
            </Text>
          </Grid>
          <Grid xs='minmax(auto, auto) auto' align='end' gap='32px'>
            <Image
              src={onboarding}
              alt="high-key-app"
              priority
            />
            <Text bold>
              For the Nav bar the idea was to focus on critical pages such as the Home page, Closet/Wardrobe and the possibility of editing.
            </Text>
          </Grid>
        </Grid>

        <Grid color='RED' xs='minmax(auto, 527px)' gap='64px'>
          <Text.H4>Branding (view full branding and visual app’s creation)</Text.H4>
          <Grid>
            <Text>
              When selecting the <strong>brand’s name</strong>, I started with the concept of <strong>‘HighKey’</strong>—a nod to Gen Z slang that conveys intensity and strong feelings toward something or someone.
            </Text>
            <Text>
              The HighKey brand features a <strong>dark-red palette</strong> paired with geometric <strong>sans-serif typography</strong>, creating a bold and sleek feel. The dynamic color palette is designed to complement and enhance the UI elements.          </Text>

          </Grid>
        </Grid>
      </SectionContainer>
      {/* <Grid container
        p="3rem"
      >
        <Text.H4
          m="3rem 0 0 0"
          color="PRIMARY"
        >
          Wordmark
        </Text.H4>
        <Grid
          xs="minmax(auto, 936px)"
          m="3rem 0"
          gap="2rem"
        >
          <Text.H4 bold={false}>
            I tried to create the wordmark through some sketches, but it was not
            the path I wanted to follow.
          </Text.H4>
          <Text.H4 bold={false}>
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
            src={wordmark}
            alt="high-key-app"
            priority
          />
        </Grid>
        <Grid
          xs="minmax(auto, 768px)"
          m="3rem 0"
        >
          <Text.H5 bold={false}>
            For the brand wordmark and overall typography, I selected the Jost
            font, a geometric sans-serif typeface inspired by Futura, specifically
            designed for optimal screen readability.{' '}
          </Text.H5>
        </Grid>
        <Grid
          justify="center"
          xs="minmax(auto, 1fr)"
          gap="3rem"
        >
          <Image
            src={typography}
            alt="high-key-app"
            priority
          />
          <Image
            src={moodboard}
            alt="high-key-app"
            priority
          />
        </Grid>
        <Link
          target="_blank"
          href="https://www.figma.com/design/mLbMNuRlPPfixgpWu1Vh5H/MoodBoard?node-id=0-1&t=ry8bEd10jl6NFd1N-0"
        >
          <Text.H6
            bold={false}
            m="3rem"
            align="center"
          >
            View the full UI Library and Design System here.
          </Text.H6>
        </Link>
      </Grid> */}
    </>
  );
}
