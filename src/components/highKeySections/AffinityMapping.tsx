import Image from 'next/image';
import Link from 'next/link';

import behaviours from './assets/behaviours.png';
import motivationGoals from './assets/motivation-goals.png';
import painPoints from './assets/pain-points.png';
import Grid from '../shared/Grid';
import Hr from '../shared/Hr';
import Text from '../shared/Text';

export default function AffinityMapping() {
  return (
    <>
      <Grid
        bg="RED"
        color="WHITE"
        p="5rem 0"
      >
        <Grid
          container
          p="0 3rem"
        >
          <Text.H5
            bold={false}
          >
            I used a Affinity mapping to quickly organize the Insights from the
            interviews.
            {' '}
          </Text.H5>
        </Grid>
      </Grid>
      <Grid
        container
        p="0 3rem"
      >
        <Text.H4
          color="RED"
          m="3rem 0 0 0"
        >
          Affinity Mapping
        </Text.H4>
        <Grid
          gap=".25rem"
          justify="center"
          m="3rem 0 0 0"
          xs="minmax(auto, 500px)"
        >
          <Text.H6
            align="center"
          >
            Pain Points
          </Text.H6>
          <Hr />
        </Grid>
        <Grid
          justify="center"
          xs="auto"
        >
          <Image
            priority
            alt="Pain Points"
            src={painPoints}
          />
        </Grid>
        <Grid
          gap=".25rem"
          justify="center"
          m="3rem 0 0 0"
          xs="minmax(auto, 500px)"
        >
          <Text.H6
            align="center"
          >
            Motivation/Goals
          </Text.H6>
          <Hr />
        </Grid>
        <Grid
          justify="center"
          xs="auto"
        >
          <Image
            priority
            alt="Motivation/Goals"
            src={motivationGoals}
          />
        </Grid>
        <Grid
          gap=".25rem"
          justify="center"
          m="3rem 0 0 0"
          xs="minmax(auto, 500px)"
        >
          <Text.H6
            align="center"
          >
            Behaviours
          </Text.H6>
          <Hr />
        </Grid>
        <Grid
          justify="center"
          xs="auto"
        >
          <Image
            priority
            alt="Behaviours"
            src={behaviours}
          />
        </Grid>
      </Grid>
      <Grid
        p="2rem 0"
      >
        <Link
          href="https://www.figma.com/proto/kfHxXzxBNjHhztQ1IOrTvt/CP1?page-id=46%3A126&node-id=46-157&t=BWCppYSYxjVIAdLN-1"
          target="_blank"
        >
          <Text.H6
            align="center"
            bold={false}
          >
            View the full affinity mapping here.
          </Text.H6>
        </Link>
      </Grid>
    </>
  );
}
