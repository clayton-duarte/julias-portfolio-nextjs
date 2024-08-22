import Image from 'next/image';

import define from '~/assets/define.svg';
import doubleDiamond from '~/assets/double-diamond.png';
import empathize from '~/assets/empathize.svg';
import ideate from '~/assets/ideate.svg';
import prototype from '~/assets/prototype.svg';
import test from '~/assets/test.svg';

import Grid from '../Grid';
import Text from '../Text';

export default function DesignProcess() {
  return (
    <Grid bg="PRIMARY" color="WHITE">
      <Grid container xsP="3rem 1rem" mdP="5rem 3rem" gap="3rem">
        <Grid xs="minmax(auto, 450px)" justify="center">
          <Text.H4 align="center">Design Process</Text.H4>
          <Text align="center">
            I used a human-centered approach in a double diamond process to
            places real people at the center of the solution.
          </Text>
        </Grid>
        <Grid justify="center" m="3rem 0 4rem 0" xs="minmax(auto, 665px)">
          <Image src={doubleDiamond} alt="high-key-app" priority />
        </Grid>
        <Grid
          xs="auto auto"
          md="repeat(5, auto)"
          gap="2rem"
          justify="space-evenly"
          m="2rem 0"
        >
          <Grid xs="auto" justify="center">
            <Grid bg="WHITE" p="2rem" radius="2.5rem">
              <Image src={empathize} alt="high-key-app" priority />
            </Grid>
            <Text.H6 bold={false} align="center">
              Empathize
            </Text.H6>
          </Grid>
          <Grid xs="auto" justify="center">
            <Grid bg="WHITE" p="2rem" radius="2.5rem">
              <Image src={define} alt="high-key-app" priority />
            </Grid>
            <Text.H6 bold={false} align="center">
              Define
            </Text.H6>
          </Grid>
          <Grid xs="auto" justify="center">
            <Grid bg="WHITE" p="2rem" radius="2.5rem">
              <Image src={ideate} alt="high-key-app" priority />
            </Grid>
            <Text.H6 bold={false} align="center">
              Ideate
            </Text.H6>
          </Grid>
          <Grid xs="auto" justify="center">
            <Grid bg="WHITE" p="2rem" radius="2.5rem">
              <Image src={prototype} alt="high-key-app" priority />
            </Grid>
            <Text.H6 bold={false} align="center">
              Prototype
            </Text.H6>
          </Grid>
          <Grid xs="auto" justify="center">
            <Grid bg="WHITE" p="2rem" radius="2.5rem">
              <Image src={test} alt="high-key-app" priority />
            </Grid>
            <Text.H6 bold={false} align="center">
              Test
            </Text.H6>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
