import Grid from '~/components/shared/Grid';
import Text from '~/components/shared/Text';

import SectionContainer from '../shared/SectionContainer';

export default function Summary() {
  return (
    <Grid
      bg="PURPLE"
      color="WHITE"
    >
      <SectionContainer>
        <Grid
          gap="1rem"
          justify="space-between"
          md="repeat(4, auto)"
          p="75px 0"
        >
          <Grid
            mdGap="32px"
            xsGap=".5rem"
          >
            <Text.H4>
              My role
            </Text.H4>
            <Text>
              UX/UI Design
            </Text>
          </Grid>

          <Grid
            mdGap="32px"
            xsGap=".5rem"
          >
            <Text.H4>
              Team Members
            </Text.H4>
            <Text>
              Julia S, Madhu, Himanshu,
              <br />
              {' '}
              Nimrod, Jenna
            </Text>
          </Grid>

          <Grid
            mdGap="32px"
            xsGap=".5rem"
          >
            <Text.H4>
              Industry
            </Text.H4>
            <Text>
              E-commerce
            </Text>
          </Grid>

          <Grid
            mdGap="32px"
            xsGap=".5rem"
          >
            <Text.H4>
              Timeline
            </Text.H4>
            <Text>
              24-hours hackaton
            </Text>
          </Grid>
        </Grid>
      </SectionContainer>
    </Grid>
  )
}