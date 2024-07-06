import Grid from "../Grid";
import Text from "../Text";

export default function NextStepsLearnings() {
  return (
    <Grid container p='3rem'>
      <Text.H4 m="3rem 0">Next Steps & Key Learnings</Text.H4>
      <Grid xs='1fr 1fr' gap="3rem">
        <Grid.Ul gap="2rem">
          <li>
            <Text.H4 bold={false}>
              Expand on the visualization data features.
            </Text.H4>
          </li>
          <li>
            <Text.H4 bold={false}>
              Polish the UI visuals.
            </Text.H4>
          </li>
          <li>
            <Text.H4 bold={false}>
              Test the prototype with more users.
            </Text.H4>
          </li>
        </Grid.Ul>
        <Grid.Ul gap="2rem">
          <li>
            <Text.H4 bold={false}>
              Iterate and testing is the key for improving the user experience.
            </Text.H4>
          </li>
          <li>
            <Text.H4 bold={false}>
              The process becomes easier when defining better the problem space.
            </Text.H4>
          </li>
        </Grid.Ul>
      </Grid>
    </Grid>
  )
}
