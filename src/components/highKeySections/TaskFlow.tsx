import Image from 'next/image';

import addItemUserStory from '~/assets/add-item-user-story.png';
import clothUsageUserStory from '~/assets/cloth-usage-user-story.png';
import createOutfitUserStory from '~/assets/create-outfit-user-story.png';

import Grid from '../Grid';
import Text from '../Text';

export default function TaskFlow() {
  return (
    <Grid container p="0 3rem">
      <Text.H4 m="3rem 0 0 0" color="PRIMARY">
        TaskFlow
      </Text.H4>
      <Grid m="3rem 0" gap="2rem">
        <Text.H5 bold={false}>
          Through talking with my target user, I obtained some valuable insights
          about data visualization. If implemented in the app, it should be done
          in a fun way.
        </Text.H5>
        <Text.H5 bold={false}>
          The choice was to create a task flow where the user first{' '}
          <Text.Strong>creates an outfit</Text.Strong> and then can view{' '}
          <Text.Strong>
            how many times they have created an outfit with that clothing piece
          </Text.Strong>
          . This shows the data visualization in a subtle way without being
          pushy.
        </Text.H5>
      </Grid>
      <Text.H3 p="3rem 0" bold={false} align="center">
        Add an item into the app
      </Text.H3>
      <Grid xs="minmax(auto, 1000px)" justify="center">
        <Image src={addItemUserStory} alt="high-key-app" priority />
      </Grid>
      <Text.H3 m="3rem 0 0 0" p="3rem 0" bold={false} align="center">
        Create an outfit
      </Text.H3>
      <Grid xs="minmax(auto, 1000px)" justify="center">
        <Image src={clothUsageUserStory} alt="high-key-app" priority />
      </Grid>
      <Text.H3 m="3rem 0 0 0" p="3rem 0" bold={false} align="center">
        Clothing usage visualization
      </Text.H3>
      <Grid xs="minmax(auto, 1000px)" justify="center">
        <Image src={createOutfitUserStory} alt="high-key-app" priority />
      </Grid>
    </Grid>
  );
}
