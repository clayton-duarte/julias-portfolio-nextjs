import Container from "../Container";
import Grid from "../Grid";
import Text from "../Text";

export default function ProblemSpaceSection() {
  return (
    <Container>
      <Grid p='2rem 0'>
        <Text.H4 color='PRIMARY' m='0 0 3rem 0'>Problem Space</Text.H4>
        <Text.H5 bold={false}>
          Gen Z Canadians, struggle to plan their outfits, leading to{' '}
          <Text.Strong color="PRIMARY">overbuying or underusing</Text.Strong>{' '}
          their clothing pieces. This problem occurs because{' '}
          <Text.Strong color="PRIMARY">they often forget about the clothes they own</Text.Strong>{' '}
          after purchase. As a result, items are{' '}
          <Text.Strong color="PRIMARY">underutilized or donated after minimal use</Text.Strong>.
        </Text.H5>
      </Grid>
    </Container>
  )
}