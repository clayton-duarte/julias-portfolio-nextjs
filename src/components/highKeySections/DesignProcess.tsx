import Image from "next/image";

import Grid from "../Grid";
import Text from "../Text";

export default function DesignProcessSection() {
  return (
    <Grid bg='PRIMARY' color='WHITE' p='3rem 0'>
      <Grid container>
        <Text.H4 align="center" m='1rem 0'>Design Process</Text.H4>
        <Text align='center' m='2rem 0'>
          I used a human-centered approach in a double diamond
          <br />
          process to places real people at the center of the solution.
        </Text>
        <Grid justify="center" m='3rem 0 4rem 0'>
          <img style={{ margin: '0 auto' }} src="https://placehold.co/660x420" />
        </Grid>
        <Grid xs='repeat(5, auto)' justify="space-between" m='2rem 0'>
          <Grid>
            <Grid bg='WHITE' p='2rem' radius='2.5rem'>
              <Image
                src="/empathize.svg"
                alt="high-key-app"
                width={50}
                height={50}
                priority
              />
            </Grid>
            <Text.H6 bold={false} align="center">Empathize</Text.H6>
          </Grid>
          <Grid>
            <Grid bg='WHITE' p='2rem' radius='2.5rem'>
              <Image
                src="/define.svg"
                alt="high-key-app"
                width={50}
                height={50}
                priority
              />
            </Grid>
            <Text.H6 bold={false} align="center">Define</Text.H6>
          </Grid>
          <Grid>
            <Grid bg='WHITE' p='2rem' radius='2.5rem'>
              <Image
                src="/ideate.svg"
                alt="high-key-app"
                width={50}
                height={50}
                priority
              />
            </Grid>
            <Text.H6 bold={false} align="center">Ideate</Text.H6>
          </Grid>
          <Grid>
            <Grid bg='WHITE' p='2rem' radius='2.5rem'>
              <Image
                src="/prototype.svg"
                alt="high-key-app"
                width={50}
                height={50}
                priority
              />
            </Grid>
            <Text.H6 bold={false} align="center">Prototype</Text.H6>
          </Grid>
          <Grid>
            <Grid bg='WHITE' p='2rem' radius='2.5rem'>
              <Image
                src="/test.svg"
                alt="high-key-app"
                width={50}
                height={50}
                priority
              />
            </Grid>
            <Text.H6 bold={false} align="center">Test</Text.H6>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}