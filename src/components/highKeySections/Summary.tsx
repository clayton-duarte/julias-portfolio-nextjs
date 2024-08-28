import Grid from '../shared/Grid';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

export default function SummarySection() {
  return (
    <Grid
      bg="RED"
      color="WHITE"
    >
      <SectionContainer>
        <Grid
          justify="space-between"
          md="repeat(5, auto)"
          p="75px 0"
          gap="1rem"
        >
          <Grid
            xsGap=".5rem"
            mdGap="32px"
          >
            <Text.H4>My role</Text.H4>
            <Text>UX/UI and Research</Text>
          </Grid>
          <Grid
            xsGap=".5rem"
            mdGap="32px"
          >
            <Text.H4>Industry</Text.H4>
            <Text>Fashion, Tech</Text>
          </Grid>
          <Grid
            xsGap=".5rem"
            mdGap="32px"
          >
            <Text.H4>Tools used</Text.H4>
            <Text>
              Figma, Google slides,
              <br />
              Google Docs,
              <br />
              Photoshop, Illustrator
            </Text>
          </Grid>
          <Grid
            xsGap=".5rem"
            mdGap="32px"
          >
            <Text.H4>Designed for</Text.H4>
            <Text>iOs mobile</Text>
          </Grid>
          <Grid
            xsGap=".5rem"
            mdGap="32px"
          >
            <Text.H4>Duration</Text.H4>
            <Text>May 2024 - July 2024</Text>
          </Grid>
        </Grid>
      </SectionContainer>
    </Grid>
  );
}
