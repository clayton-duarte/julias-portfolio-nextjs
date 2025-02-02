import Grid from '../shared/Grid';
import Text from '../shared/Text';

export default function HowMightWe() {
  return (
    <>
      <Grid
        bg="RED"
        color="WHITE"
      >
        <Grid
          container
          mdP="5rem 3rem"
          xsP="3rem 1rem"
        >
          <Text.H1
            align="center"
          >
            How Might We
          </Text.H1>
          <Text.H4
            align="center"
            bold={false}
          >
            help Gen Z Canadians with their outfit planning to reduce underusing habits and make better use of their existing wardrobe?
          </Text.H4>
        </Grid>
      </Grid>
      {/* <Grid
        container
        p="3rem"
        xs="minmax(auto, 862px)"
      >
        <Text.H5 bold={false}>
          I then plotted exercise their pain points, behaviours and motivations
          into an <Text.Strong color="RED">Experience Mapping</Text.Strong>{' '}
          to further understand how the users are currently experiencing the
          problem of underusing.
        </Text.H5>
      </Grid> */}
    </>
  );
}
