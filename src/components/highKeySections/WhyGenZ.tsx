import Grid from '../Grid';
import QuestionTitle from '../QuestionTitle';
import Text from '../Text';

export default function WhyGenZSection() {
  return (
    <Grid
      container
      p="120px 0"
      xs='minmax(auto, 866px)'
      justify='center'
    >
      <QuestionTitle>Why to focus on Gen Z (Young Adults)</QuestionTitle>
      <Text.H4>
        Based on existing research on consumer behaviour + environmental mindset:
      </Text.H4>
      <Grid.Ul>
        <li>Gen Z are <strong>2.6 times</strong> more likely to <strong>buy clothing every week</strong> than other generations (Oliver Wyman)</li>
        <li><strong>75% of purchases</strong> made by Gen Z <strong>are in fashion</strong> (UKPOS)</li>
        <li><strong>51%</strong> of Gen Z students interviewed say they <strong>want to quit fast fashion</strong> and shop less.(ThredUp) </li>
        <li>A FirstInsight report reveals that 62% of Gen Z shoppers <strong>prefer to buy from sustainable brands</strong>, and a staggering 73% are <strong>willing to pay more for sustainable products</strong>.</li>
      </Grid.Ul>
    </Grid>
  );
}
