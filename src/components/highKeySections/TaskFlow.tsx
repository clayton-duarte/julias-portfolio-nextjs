import Image from 'next/image';
import Link from 'next/link';

import addShirt from './assets/add-shirt.svg';
import outfit from './assets/outfit.svg';
import viewShirt from './assets/view-shirt.svg';
import Grid from '../shared/Grid';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

export default function TaskFlow() {
  return (
    <>
      <SectionContainer>
        <Grid xs='minmax(auto, 527px)'>
          <Text.H4 color="RED">Task Flow</Text.H4>
          <Text color="RED">Through talking with my target user, I obtained some valuable insights about how they wanted to view data. If implemented in the app, it should be done in a fun way.</Text>
          <Text color="RED">The choice was to create a user flow where the user
            <strong>first creates an outfit</strong> and then can <strong>view how many
              times they have created an outfit with that clothing piece.</strong> This shows the data visualization in non-intrusive way.</Text>
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Grid md="repeat(3, minmax(auto, 180px))" justify="space-between" align='center'>
          <Grid color="RED" gap="32px">
            <Image
              src={addShirt}
              alt="high-key-app"
              priority
            />
            <Text.H4 bold={false}>Add an item into the app</Text.H4>
            <Grid.Ul>
              <li>Image recognition allows user to separated image from background.</li>
              <li>Also automatically recommend clothing labels.</li>
            </Grid.Ul>
          </Grid>
          <Grid color="RED" gap="32px">
            <Image
              src={outfit}
              alt="high-key-app"
              priority
            />
            <Text.H4 bold={false}>Create an outfit</Text.H4>
            <Grid.Ul>
              <li>When you match items into an outfit, those individual items starts counting as “worn”.</li>
              <li>If the user did not create an outfit with that individual item in the last 30 days, one message pops up recommending creating an outfit with that item.</li>
              <li>The outfits stay inside cards where you can check clothes individually.</li>
            </Grid.Ul>
          </Grid>
          <Grid color="RED" gap="32px">
            <Image
              src={viewShirt}
              alt="high-key-app"
              priority
            />
            <Text.H4 bold={false}>Clothing usage visualization</Text.H4>
            <Grid.Ul>
              <li>The user can check how many times they create an outfit with that item, per day, month and year.</li>
              <li>The app provide a sort by based on most worn, least worn.</li>
            </Grid.Ul>
          </Grid>
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Text align="center">
          <Link target="_blank"
            href="https://www.figma.com/board/b2mncqw5eIXBa1aqyy2EnK/Flows?node-id=0-1&t=U4MnStf3yrkDltSE-0">
            View the full Flows here.
          </Link>
        </Text>
      </SectionContainer>
    </>
    // <Grid
    //   container
    //   p="0 3rem"
    // >
    //   <Text.H4
    //     m="3rem 0 0 0"
    //     color="PRIMARY"
    //   >
    //     TaskFlow
    //   </Text.H4>
    //   <Grid
    //     m="3rem 0"
    //     gap="2rem"
    //   >
    //     <Text.H5 bold={false}>
    //       Through talking with my target user, I obtained some valuable insights
    //       about data visualization. If implemented in the app, it should be done
    //       in a fun way.
    //     </Text.H5>
    //     <Text.H5 bold={false}>
    //       The choice was to create a task flow where the user first{' '}
    //       <Text.Strong>creates an outfit</Text.Strong> and then can view{' '}
    //       <Text.Strong>
    //         how many times they have created an outfit with that clothing piece
    //       </Text.Strong>
    //       . This shows the data visualization in a subtle way without being
    //       pushy.
    //     </Text.H5>
    //   </Grid>
    //   <Text.H3
    //     p="3rem 0"
    //     bold={false}
    //     align="center"
    //   >
    //     Add an item into the app
    //   </Text.H3>
    //   <Grid
    //     xs="minmax(auto, 1000px)"
    //     justify="center"
    //   >
    //     <Image
    //       src={addItemUserStory}
    //       alt="high-key-app"
    //       priority
    //     />
    //   </Grid>
    //   <Text.H3
    //     m="3rem 0 0 0"
    //     p="3rem 0"
    //     bold={false}
    //     align="center"
    //   >
    //     Create an outfit
    //   </Text.H3>
    //   <Grid
    //     xs="minmax(auto, 1000px)"
    //     justify="center"
    //   >
    //     <Image
    //       src={clothUsageUserStory}
    //       alt="high-key-app"
    //       priority
    //     />
    //   </Grid>
    //   <Text.H3
    //     m="3rem 0 0 0"
    //     p="3rem 0"
    //     bold={false}
    //     align="center"
    //   >
    //     Clothing usage visualization
    //   </Text.H3>
    //   <Grid
    //     xs="minmax(auto, 1000px)"
    //     justify="center"
    //   >
    //     <Image
    //       src={createOutfitUserStory}
    //       alt="high-key-app"
    //       priority
    //     />
    //   </Grid>
    // </Grid>
  );
}
