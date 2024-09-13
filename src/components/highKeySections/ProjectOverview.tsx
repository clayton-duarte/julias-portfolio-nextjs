import Grid from '../shared/Grid';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

export default function ProjectOverviewSection() {
  return (
    <SectionContainer>
      <Grid
        p="120px 0"
        xs="minmax(auto, 527px)"
      >
        <Text.H4
          color="RED"
          m="0 0 64px 0"
        >
          Project Overview
        </Text.H4>
        <Text>
          As part of my capstone project for the UX program at BrainStation, I
          focused on addressing clothing waste by researching fashion
          consumption patterns. My initial step involved identifying the target
          audience with the
          {' '}
          <strong>
            most significant impact on fashion consumption
          </strong>
          .
        </Text>
        <Text>
          Through both primary and secondary research, I concentrated on
          {' '}
          <strong>
            young adults aged 18 to 25
          </strong>
          . I conducted interviews
          with individuals who shop for themselves and discovered that they
          {' '}
          <strong>
            often struggle to optimize their wardrobes
          </strong>
          . My goal
          is to help them in
          {' '}
          <strong>
            making better use of their existing wardrobe, reducing habits of
            underutilization
          </strong>
          .
        </Text>
      </Grid>
    </SectionContainer>
  );
}
