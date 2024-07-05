import Grid from "../Grid";
import Hr from "../Hr";
import Text from "../Text";

export default function TaskFlow() {
  return (
    <Grid container p='0 3rem'>
      <Text.H4 m='3rem 0 0 0' color='PRIMARY'>TaskFlow</Text.H4>
      <Hr />
      <Grid m='3rem 0' gap='2rem'>
        <Text.H5 bold={false}>
          Through talking with my target user, I obtained some valuable insights about data visualization. If implemented in the app, it should be done in a fun way.
        </Text.H5>
        <Text.H5 bold={false}>
          The choice was to create a task flow where the user first{' '}
          <Text.Strong>creates an outfit</Text.Strong>{' '}
          and then can view{' '}
          <Text.Strong>how many times they have created an outfit with that clothing piece</Text.Strong>.{' '}
          This shows the data visualization in a subtle way without being pushy.
        </Text.H5>
      </Grid>
      <Text.H3 bold={false} align='center'>Create an outfit</Text.H3>
      <Text.H3 bold={false} align='center'>Epic & Task</Text.H3>
      <Grid gap='2rem' m='3rem 0'>
        <Text.H5 bold={false}>
          Based on this Epic, I created a task flow where the user can{' '}
          <Text.Strong color='PRIMARY'>create an outfit</Text.Strong>.{' '}
          By tracking how many times they include a particular clothing piece in their outfits, they can see if they are truly wearing that beloved t-shirt or not.
        </Text.H5>
      </Grid>
    </Grid>
  )
}