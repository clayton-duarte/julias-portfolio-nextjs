import Link from "next/link";

import Grid from "../Grid";
import Hr from "../Hr";
import Text from "../Text";

export default function UserStories() {
  return (
    <>
      <Grid container p='3rem 0'>
        <Text.H4 m='3rem 0 0 0' color='PRIMARY'>User Stories</Text.H4>
        <Hr />
      </Grid>
      <Grid justify="center" xs='auto'>
        <img src='https://placehold.co/730x800' alt='placeholder' />
      </Grid>
      <Grid container p='3rem 0'>
        <Text.H5 bold={false} align='center' m='0 0 5rem 0'>
          <Link href='https://docs.google.com/spreadsheets/d/10hmNROvyIbVEXt7ShnJDHVbtxTSnVn8ONtygGsGsY38/edit'>
            View the full User Stories here.
          </Link>
        </Text.H5>
        <Text.H3 bold={false} align='center' >Approach</Text.H3>
        <Grid gap="2rem" m='3rem 0'>
          <Text.H5 bold={false}>
            To optimize user experience, I have chosen to focus on the Epic{' '}
            <Text.Strong color='PRIMARY'>Utilization & Wear Frequency</Text.Strong>.{' '}
            This approach directly addresses the common user challenge of managing their wardrobe effectively.
          </Text.H5>
          <Text.H5 bold={false}>
            Additionally, it tackles the critical issue of sustainability by helping users{' '}
            <Text.Strong color='PRIMARY'>stay mindful of their existing clothing items</Text.Strong>,{' '}
            reducing the likelihood of neglecting what they already own.
          </Text.H5>
        </Grid>
      </Grid>
    </>
  )
}