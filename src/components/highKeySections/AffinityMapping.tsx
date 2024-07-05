import Grid from "../Grid";
import Hr from "../Hr";
import Text from "../Text";

export default function AffinityMapping() {
  return (
    <>
      <Grid bg='PRIMARY' color='WHITE' p='5rem 0'>
        <Grid  container p='0 3rem'>
          <Text.H5 bold={false}>
            I used a Affinity mapping to quickly organize the Insights from the interviews.          </Text.H5>
        </Grid>
      </Grid>
      <Grid  container p='0 3rem'>
        <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Affinity Mapping</Text.H4>
        <Hr />
        <Grid justify="center" xs='auto'>
          <img src="https://placehold.co/743x1178" />
          <img src="https://placehold.co/743x1178" />
          <img src="https://placehold.co/743x1178" />
        </Grid>
      </Grid>
    </>
  )
}