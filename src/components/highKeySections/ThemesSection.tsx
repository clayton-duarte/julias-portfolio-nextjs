import Grid from "../Grid";
import Hr from "../Hr";
import Text from "../Text";

export default function ThemesSection() {
  return (
    <Grid container p='0 3rem'>
      <Grid>
        <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Themes</Text.H4>
        <Hr />
        <Text.H4 bold={false} m='3rem 0'>
          The following were the core themes and insights that emerged through Affinity Mapping:
        </Text.H4>
        <Grid xs='1fr 1fr' gap='1.5rem'>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text>Inspirational and Aspirational Shopping:</Text>
            <Text>
              Insight - Seeking specific styles, Using social media for quick fashion inspiration and planning outfits, The thrill of thrifting and finding unique pieces.
            </Text>
          </Grid>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text>Ethical and Quality Concerns:</Text>
            <Text>
              Insight - Ethical issues with certain brands affecting purchasing decisions.
              <br />
              Disappointment with the quality of expensive items from well-known brands.
            </Text>
          </Grid>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text>Fit and Sizing Challenges:</Text>
            <Text>
              Insight - Difficulty finding jeans that fit well for petite heights. Inconsistent sizing leading to items being too tight, loose, long, or short.
              <br />
              Online purchases not fitting well or matching expectations.
            </Text>
          </Grid>
          <Grid bg='PRIMARY' color='WHITE' radius='1.25rem' p='2.5rem'>
            <Text>Fit and Sizing Challenges:</Text>
            <Text>
              Insight - Difficulty finding jeans that fit well for petite heights. Inconsistent sizing leading to items being too tight, loose, long, or short.
              <br />
              Online purchases not fitting well or matching expectations.
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}