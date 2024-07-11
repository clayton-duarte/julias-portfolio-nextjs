import Grid from "../Grid";
import Text from "../Text";

export default function ThemesSection() {
  return (
    <Grid container p='0 3rem'>
      <Grid>
        <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Themes</Text.H4>
        <Text.H4 bold={false} m='3rem 0'>
          The following were the core themes and insights that emerged through Affinity Mapping:
        </Text.H4>
        <Grid md='1fr 1fr' align="stretch" gap='1.5rem'>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text.H5>Inspirational and Aspirational Shopping</Text.H5>
            <Text.H5 bold={false}>
              <Text.Strong>Insight</Text.Strong>{' '}
              - Seeking specific styles, Using social media for quick fashion inspiration and planning outfits, The thrill of thrifting and finding unique pieces.
            </Text.H5>
          </Grid>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text.H5>Ethical and Quality Concerns:</Text.H5>
            <Text.H5 bold={false}>
              <Text.Strong>Insight</Text.Strong>{' '}
              - Ethical issues with certain brands affecting purchasing decisions.
              <br />
              Disappointment with the quality of expensive items from well-known brands.
            </Text.H5>
          </Grid>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text.H5>Fit and Sizing Challenges</Text.H5>
            <Text.H5 bold={false}>
              <Text.Strong>Insight</Text.Strong>{' '}
              - Difficulty finding jeans that fit well for petite heights. Inconsistent sizing leading to items being too tight, loose, long, or short. Online purchases not fitting well or matching expectations.
            </Text.H5>
          </Grid>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text.H5>Utilization & Wear Frequency</Text.H5>
            <Text.H5 bold={false}>
              <Text.Strong>Insight</Text.Strong>{' '}
              - Individuals feel overwhelmed by the amount of clothing they have. The clutter leads to them forgetting about the clothes inside their wardrobe.
            </Text.H5>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}