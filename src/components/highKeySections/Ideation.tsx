import Link from "next/link";

import BigQuote from "../BigQuote";
import Grid from "../Grid";
import SectionContainer from "../SectionContainer";
import Text from "../Text";

export default function IdeationSection() {
  return (
    <>
      <SectionContainer>
        <Grid xs='minmax(auto, 527px)'>
          <Text.H4 color="RED">Ideation</Text.H4>
          <Text color="RED">Keeping the persona in mind, I brainstormed several ideas and prioritized them based on their impact relative to the effort required. Given the user&apos;s difficulty managing their closet, the chosen idea was to create a <strong>virtual closet</strong>. This would help them <strong>visualize their clothing items more effectively</strong> and <strong>keep track of how often they use each piece</strong>.</Text>
        </Grid>
      </SectionContainer>
      <BigQuote>During the Ideation phase, I brainstormed over 20 ideas and refined them down to three final concepts. I then developed task flows and created initial sketches to provide a visual overview of the key user experience inside the app.</BigQuote>
      <SectionContainer>
        <Grid md='repeat(3, minmax(auto, 320px))' justify="space-between" align="center">
          <Grid p='64px 0 0 0'>
            <Text.H4 color="RED">As a practical individual</Text.H4>
          </Grid>
          <Grid gap='64px'>
            <Text.H4 color="RED">I want to</Text.H4>
            <Grid.Ul>
              <li><Text.H4 bold={false}>identify rarely worn items</Text.H4></li>
              <li><Text.H4 bold={false}>mix and match my clothing piece</Text.H4></li>
              <li><Text.H4 bold={false}>receive reminders to wear certain items</Text.H4></li>
            </Grid.Ul>
          </Grid>
          <Grid gap='64px'>
            <Text.H4 color="RED">so that</Text.H4>
            <Grid.Ul>
              <li><Text.H4 bold={false}>I can declutter my closet</Text.H4></li>
              <li><Text.H4 bold={false}>I can create new looks without buying more</Text.H4></li>
              <li><Text.H4 bold={false}>I can make full use of my wardrobe</Text.H4></li>
            </Grid.Ul>
          </Grid>
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Text align="center">
          <Link target="_blank"
            href="https://docs.google.com/spreadsheets/d/10hmNROvyIbVEXt7ShnJDHVbtxTSnVn8ONtygGsGsY38/edit?gid=1760893060#gid=1760893060">
            View the full User Stories here.
          </Link>
        </Text>
      </SectionContainer>
    </>
  )
}