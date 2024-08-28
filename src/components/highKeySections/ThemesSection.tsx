import styled from '@emotion/styled';

import BigQuote from '../shared/BigQuote';
import Grid from '../shared/Grid';
import SectionContainer from '../shared/SectionContainer';
import Text from '../shared/Text';

const StyledGrid = styled(Grid)`
border-bottom: 8px solid ${({ theme }) => { return theme.RED }};
`

export default function ThemesSection() {
  return (
    <>
      <BigQuote>
        I then organized and synthesized the findings into those four themes.
      </BigQuote>
      <SectionContainer>
        <Text.H4
          color="RED"
        >
          Themes
        </Text.H4>
        <Text.H4
          bold={false}
          m="32px 0 82px 0"
        >
          After user interviews, I identified <Text.Strong color='RED'>four key themes</Text.Strong>, with one standing out: the struggle to declutter wardrobes. All five participants mentioned <Text.Strong color='RED'>feeling overwhelmed by their clothing</Text.Strong>, due to emotional attachment, lack of time to organize, or simply having too much. This shared challenge became the focus for the next steps in the design process.
        </Text.H4>
        <Grid
          md="1fr 1fr"
          align="stretch"
          gap="1.5rem"
        >
          <Grid
            bg='GREY_LIGHT'
            radius="1.25rem"
            p="2.5rem"
          >
            <Text.H4>Inspirational and Aspirational Shopping</Text.H4>
            <Text>
              Seeking specific styles, Using social media for quick fashion inspiration and planning outfits, The thrill of thrifting and finding unique pieces.
            </Text>
          </Grid>
          <Grid
            bg='GREY_LIGHT'
            radius="1.25rem"
            p="2.5rem"
          >
            <Text.H4>Ethical and Quality Concerns</Text.H4>
            <Text>
              Ethical issues with certain brands affecting purchasing decisions. Disappointment with the quality of expensive items from well-known brands.
            </Text>
          </Grid>
          <Grid
            bg='GREY_LIGHT'
            radius="1.25rem"
            p="2.5rem"
          >
            <Text.H4>Fit and Sizing Challenges</Text.H4>
            <Text>
              Difficulty finding jeans that fit well for petite heights. Inconsistent sizing leading to items being too tight, loose, long, or short. Online purchases not fitting well or matching expectations.
            </Text>
          </Grid>
          <StyledGrid
            bg='RED_LIGHT'
            radius="1.25rem"
            p="2.5rem"
          >
            <Text.H4>Utilization & Wear Frequency</Text.H4>
            <Text>
              Individuals feel overwhelmed by the amount of clothing they have. The clutter leads to them forgetting about the clothes inside their wardrobe.
            </Text>
          </StyledGrid>
        </Grid>
      </SectionContainer>
    </>
  );
}
