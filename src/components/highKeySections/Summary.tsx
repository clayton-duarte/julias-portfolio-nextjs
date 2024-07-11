import Grid from "../Grid";
import Text from "../Text";

export default function SummarySection() {
  return (
    <Grid bg="PRIMARY" color="WHITE">
      <Grid container p='3rem'>
        <Grid justify='space-between' md="repeat(4, auto)" p='5rem 0' gap="3rem">
          <Grid xsGap=".5rem" mdGap="1rem">
            <Text.H4>My role</Text.H4>
            <Text>UX/UI and Research</Text>
          </Grid>
          <Grid xsGap=".5rem" mdGap="1rem">
            <Text.H4>Industry</Text.H4>
            <Text>Fashion, Retail</Text>
          </Grid>
          <Grid xsGap=".5rem" mdGap="1rem">
            <Text.H4>Tools used</Text.H4>
            <Text>
              Figma, Google slides, Google Docs,
              <br />
              Photoshop, Illustrator
            </Text>
          </Grid>
          <Grid xsGap=".5rem" mdGap="1rem">
            <Text.H4>Duration</Text.H4>
            <Text>May 2024 - July 5</Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}