import Image from 'next/image';

import closetPage from './assets/closet-page.png';
import consistentDescribe from './assets/consistent-describe.png';
import midFiToEnding from './assets/mid-fi-to-ending.png';
import onboarding from './assets/onboarding.png';
import sketches from './assets/sketches.png';
import wireframes from './assets/wireframes.png';
import Grid from '../shared/Grid';
import Text from '../shared/Text';

export default function SketchesWireframes() {
  return (
    <>
      <Grid
        container
        p="0 3rem"
      >
        <Text.H4
          align="center"
          color="RED"
          m="3rem 0 0 0"
          transform="capitalize"
        >
          Bringing Ideas to reality
        </Text.H4>
        <Grid
          gap="3rem"
          m="5rem 0"
          xs="minmax(auto, 540px)"
        >
          <Text.H4
            bold={false}
          >
            First Round
          </Text.H4>
          <Text.H4
            bold={false}
          >
            The main purpose was to create ideas and structure the main flow.
          </Text.H4>
        </Grid>
        <Image
          priority
          alt="high-key-app"
          src={sketches}
        />
        <Grid
          gap="3rem"
          p="5rem 0"
          xs="minmax(auto, 540px)"
        >
          <Text.H4
            bold={false}
          >
            Wireframing
          </Text.H4>
          <Text.H4
            bold={false}
          >
            After gathering inspiration and doing some scribbling, it is time to
            translate it to a prototype ready for testing.
          </Text.H4>
        </Grid>
        <Image
          priority
          alt="high-key-app"
          src={wireframes}
        />
      </Grid>
      <Grid
        bg="RED"
        color="WHITE"
        m="3rem 0"
      >
        <Grid
          container
          p="5rem 3rem"
        >
          <Text.H5
            align="center"
            bold={false}
          >
            After the testing was found a lot of room for improvements:
          </Text.H5>
        </Grid>
      </Grid>
      <Grid
        container
        p="0 3rem"
      >
        <Grid
          justify="center"
          p="5rem 0 10rem 0"
          xs="minmax(auto, 500px)"
        >
          <Text.H5>
            Ensure that the onboarding screen provides an app summary for users.
          </Text.H5>
        </Grid>
        <Image
          priority
          alt="high-key-app"
          src={onboarding}
        />
        <Grid
          justify="center"
          p="5rem 0 10rem 0"
          xs="minmax(auto, 500px)"
        >
          <Text.H5>
            Consider the real-life concepts of “outfits” and “closets” to
            improve the flow and user understanding.
          </Text.H5>
        </Grid>
        <Image
          priority
          alt="high-key-app"
          src={midFiToEnding}
        />
        <Grid
          gap="2rem"
          p="5rem 0"
        >
          <Text.H5
            bold={false}
          >
            I have changed the name of the page from “All Items” to “Your
            Closet” because, in real-life situations, users have their clothing
            pieces in their closets.
          </Text.H5>
          <Text.H5
            bold={false}
          >
            Additionally, I ended up changing the Trendy Outfits card to provide
            users with better filtering options for their clothes, a search bar
            for faster finding, chips, and a sort-by feature for less-used
            clothing pieces.
          </Text.H5>
        </Grid>
        <Grid
          justify="center"
          p="5rem 0"
          xs="minmax(auto, 500px)"
        >
          <Text.H5>
            Use consistent text to describe the same actions or items within the
            app.
          </Text.H5>
        </Grid>
        <Image
          priority
          alt="high-key-app"
          src={consistentDescribe}
        />
        <Grid
          p="0 0 10rem 0"
          xs="minmax(auto, 840px)"
        >
          <Text.H5
            bold={false}
          >
            The page changes on those screens three times, when in reality the
            full flow would be happening on your closet page.
          </Text.H5>
        </Grid>
        <Image
          priority
          alt="high-key-app"
          src={closetPage}
        />
        <Grid
          justify="center"
          m="5rem 0 3rem 0"
          xs="minmax(auto, 432px)"
        >
          <Text.H5
            bold={false}
          >
            The final result is easier and smoother for the user to navigate.
          </Text.H5>
        </Grid>
      </Grid>
    </>
  );
}
