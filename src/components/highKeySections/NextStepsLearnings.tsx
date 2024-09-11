/* eslint-disable react/no-unescaped-entities */
import Grid from '../shared/Grid';
import QuestionTitle from '../shared/QuestionTitle';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

export default function NextStepsLearnings() {
  return (
    <>
      <Grid
        container
        p="3rem"
        xs="minmax(auto, 784px)"
      >
        <Text.H4 color='RED' m="0 0 64px 0">Critique & Feedback</Text.H4>
        <Text m="0 0 1rem 0">
          I presented the project during user testing sessions and at a tech event, and received excellent feedback. Some <strong>key takeaways</strong> include:
        </Text>
        <Grid.Ul>
          <li>
            Most participants expressed a strong interest in using the app, indicating it is a desirable product.
          </li>
          <li>
            Although my focus was on a specific target demographic, the solution appeals to a broader audience who also struggle with wardrobe organization.
          </li>
          <li>
            Insights from user interviews were echoed in people's desires, such as organizing outfits by "events" and "seasons".
          </li>
        </Grid.Ul>

        {/* 
    
      <Grid
        md="1fr 1fr"
        gap="3rem"
      >
        <Grid.Ul
          size="2rem"
          gap="2rem"
        >
          <li>
            <Text.H4 bold={false}>
              Expand on the visualization data features.
            </Text.H4>
          </li>
          <li>
            <Text.H4 bold={false}>Polish the UI visuals.</Text.H4>
          </li>
          <li>
            <Text.H4 bold={false}>Test the prototype with more users.</Text.H4>
          </li>
        </Grid.Ul>
        <Grid.Ul
          size="2rem"
          gap="2rem"
        >
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
      </Grid> */}
      </Grid>
      <QuestionTitle>
        Where do we go from here
      </QuestionTitle>

      <SectionContainer>
        <Grid.Ul gap='0' p="0 1rem 1rem 1rem">
          <li>
            Conducting more usability testings.
          </li>
          <li>
            Expanding on the data visualization features
          </li>
          <li>
            Refining UI visuals.
          </li>
        </Grid.Ul>
        <Text m='0 0 1rem 0'>
          Although the app currently lacks social features, future updates may introduce them. Consider potential misuse scenarios, such as harassment, abusive messaging, and tracking user habits without consent.
        </Text>
        <Text>
          To address these risks, the app should implement robust reporting and moderation systems and maintain transparent privacy policies.
        </Text>
      </SectionContainer>
    </>
  );
}
