import Image from 'next/image';

import define from './assets/define.svg';
import doubleDiamond from './assets/double-diamond.png';
import empathize from './assets/empathize.svg';
import ideate from './assets/ideate.svg';
import prototype from './assets/prototype.svg';
import test from './assets/test.svg';
import Grid from '../shared/Grid';
import Text from '../shared/Text';

export default function DesignProcess() {
  return (
    <Grid
      bg="RED"
      color="WHITE"
    >
      <Grid
        container
        gap="3rem"
        mdP="5rem 3rem"
        xsP="3rem 1rem"
      >
        <Grid
          justify="center"
          xs="minmax(auto, 450px)"
        >
          <Text.H4
            align="center"
          >
            Design Process
          </Text.H4>
          <Text
            align="center"
          >
            I used a human-centered approach in a double diamond process to
            places real people at the center of the solution.
          </Text>
        </Grid>
        <Grid
          justify="center"
          m="3rem 0 4rem 0"
          xs="minmax(auto, 665px)"
        >
          <Image
            priority
            alt="high-key-app"
            src={doubleDiamond}
          />
        </Grid>
        <Grid
          gap="2rem"
          justify="space-evenly"
          m="2rem 0"
          md="repeat(5, auto)"
          xs="auto auto"
        >
          <Grid
            justify="center"
            xs="auto"
          >
            <Grid
              bg="WHITE"
              p="2rem"
              radius="2.5rem"
            >
              <Image
                priority
                alt="high-key-app"
                src={empathize}
              />
            </Grid>
            <Text.H6
              align="center"
              bold={false}
            >
              Empathize
            </Text.H6>
          </Grid>
          <Grid
            justify="center"
            xs="auto"
          >
            <Grid
              bg="WHITE"
              p="2rem"
              radius="2.5rem"
            >
              <Image
                priority
                alt="high-key-app"
                src={define}
              />
            </Grid>
            <Text.H6
              align="center"
              bold={false}
            >
              Define
            </Text.H6>
          </Grid>
          <Grid
            justify="center"
            xs="auto"
          >
            <Grid
              bg="WHITE"
              p="2rem"
              radius="2.5rem"
            >
              <Image
                priority
                alt="high-key-app"
                src={ideate}
              />
            </Grid>
            <Text.H6
              align="center"
              bold={false}
            >
              Ideate
            </Text.H6>
          </Grid>
          <Grid
            justify="center"
            xs="auto"
          >
            <Grid
              bg="WHITE"
              p="2rem"
              radius="2.5rem"
            >
              <Image
                priority
                alt="high-key-app"
                src={prototype}
              />
            </Grid>
            <Text.H6
              align="center"
              bold={false}
            >
              Prototype
            </Text.H6>
          </Grid>
          <Grid
            justify="center"
            xs="auto"
          >
            <Grid
              bg="WHITE"
              p="2rem"
              radius="2.5rem"
            >
              <Image
                priority
                alt="high-key-app"
                src={test}
              />
            </Grid>
            <Text.H6
              align="center"
              bold={false}
            >
              Test
            </Text.H6>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
