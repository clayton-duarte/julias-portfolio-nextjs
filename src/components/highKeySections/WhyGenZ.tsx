import Grid from '../Grid';
import Text from '../Text';

export default function WhyGenZSection() {
  return (
    <Grid
      container
      p="120px 0"
    >
      <Grid
        p="2rem 0"
        color="RED"
        xs="minmax(auto, 527px)"
      >
        <Text.H4
          color="PRIMARY"
          m="0 0 64px 0"
        >
          Project Overview
        </Text.H4>
        <Text>
          As part of my capstone project for the UX program at BrainStation, I
          focused on addressing clothing waste by researching fashion
          consumption patterns. My initial step involved identifying the target
          audience with the{' '}
          <strong>most significant impact on fashion consumption</strong>.
        </Text>
        <Text>
          Through both primary and secondary research, I concentrated on{' '}
          <strong>young adults aged 18 to 25</strong>. I conducted interviews
          with individuals who shop for themselves and discovered that they{' '}
          <strong>often struggle to optimize their wardrobes</strong>. My goal
          is to help them in{' '}
          <strong>
            making better use of their existing wardrobe, reducing habits of
            underutilization
          </strong>
          .
        </Text>
      </Grid>
    </Grid>
  );
}
