import Image from 'next/image';
import Link from 'next/link';

import userStories from './assets/user-stories.png';
import Grid from '../shared/Grid';
import Text from '../shared/Text';

export default function UserStories() {
  return (
    <>
      <Grid
        container
        p="3rem"
      >
        <Text.H4
          color="RED"
          m="3rem 0 0 0"
        >
          User Stories
        </Text.H4>
      </Grid>
      <Grid
        justify="center"
        lgP="0"
        xs="minmax(auto, 730px)"
        xsP="1rem"
      >
        <Image
          priority
          alt="high-key-app"
          src={userStories}
        />
      </Grid>
      <Grid
        container
        p="3rem"
      >
        <Text.H6
          align="center"
          bold={false}
          m="0 0 5rem 0"
        >
          <Link
            href="https://docs.google.com/spreadsheets/d/10hmNROvyIbVEXt7ShnJDHVbtxTSnVn8ONtygGsGsY38/edit"
            target="_blank"
          >
            View the full User Stories here.
          </Link>
        </Text.H6>
        <Text.H3
          align="center"
          bold={false}
        >
          Approach
        </Text.H3>
        <Grid
          gap="2rem"
          m="3rem 0"
        >
          <Text.H4
            bold={false}
          >
            To optimize user experience, I have chosen to focus on the Epic
            {' '}
            <Text.Strong
              color="RED"
            >
              Utilization & Wear Frequency
            </Text.Strong>
            . This approach directly addresses the common user challenge of
            managing their wardrobe effectively.
          </Text.H4>
          <Text.H4
            bold={false}
          >
            Additionally, it tackles the critical issue of sustainability by
            helping users
            {' '}
            <Text.Strong
              color="RED"
            >
              stay mindful of their existing clothing items
            </Text.Strong>
            , reducing the likelihood of neglecting what they already own.
          </Text.H4>
        </Grid>
      </Grid>
    </>
  );
}
