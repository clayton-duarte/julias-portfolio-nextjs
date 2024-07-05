import Grid from "../Grid";
import Text from "../Text";

export default function HowMightWe() {
  return (
    <>
      <Grid bg='PRIMARY' color="WHITE">
        <Grid container p='3rem'>
          <Text.H1 align='center'>How Might We</Text.H1>
          <Text.H4 bold={false} align='center'>
            help Gen Z Canadians with their outfit planning to reduce underusing habits and make better use of their existing wardrobe?
          </Text.H4>
        </Grid>
      </Grid>
      <Grid container p='3rem' xs='3fr 1fr'>
        <Text.H5 bold={false}>
          I then plotted exercise their pain points, behaviours and motivations into a{' '}
          <Text.Strong color='PRIMARY'>Experience Mapping</Text.Strong>{' '}
          to further understand how the users are currently experiencing the problem of underusing.        </Text.H5>
      </Grid>
    </>
  )
}