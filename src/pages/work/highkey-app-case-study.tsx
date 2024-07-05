import styled from "@emotion/styled";

import Grid from "~/components/Grid";
import Header from "~/components/Header";
import Banner from "~/components/highKeySections/Banner";
import DesignProcess from "~/components/highKeySections/DesignProcess";
import InterviewScript from "~/components/highKeySections/InterviewScript";
import ProblemSpace from "~/components/highKeySections/ProblemSpace";
import SecondaryResearch from "~/components/highKeySections/SecondaryResearch";
import Summary from "~/components/highKeySections/Summary";
import Text from "~/components/Text";

const Row = styled.div<{ align?: string; justify?: string }>`
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.align || 'start'};
  justify-content: space-between;
  margin: 3rem 0;
  display: flex;
  width: 100%;
  gap: 3rem;
`

const H1 = styled.h1`
  color: ${props => props.theme.PRIMARY};
  font-size: 80px;
  margin: 0;
`

const H2 = styled.h2<{ primary?: boolean; align?: string }>`
  color: ${props => props.primary ? props.theme.PRIMARY : 'inherit'};
  text-align: ${props => props.align || 'left'};
  font-size: 36px;
  margin: 0;
`

const Col = styled.div<{ align?: string; grow?: number }>`
  align-items: ${props => props.align || 'start'};
  flex-direction: column;
  justify-items: start;
  display: flex;
  width: 100%;
  gap: 1rem;
`

const Title = styled.h3<{ primary?: boolean; align?: string; separator?: boolean }>`
  border-bottom: ${props => props.separator ? `2px solid ${props.theme.BLACK}` : 'none'};
  color: ${props => props.primary ? props.theme.PRIMARY : 'inherit'};
  text-align: ${props => props.align || 'left'};
  font-size: 36px;
  padding: 1rem 0;
  margin: 1rem 0;
`

const P1 = styled.p<{ strong?: boolean; align?: string; primary?: boolean }>`
  color: ${props => props.primary ? props.theme.PRIMARY : 'inherit'};
  font-weight: ${props => props.strong ? '700' : '400'};
  text-align: ${props => props.align || 'left'};
  margin: 0;
`

const P2 = styled(P1)`
  font-size: 27px;
`

const CardSection = styled.section`
  background: ${props => props.theme.PRIMARY};
  color: ${props => props.theme.WHITE};
  border-radius: 20px;
  padding: 2rem;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const ListItem = styled.li`
  font-size: 27px;
`

const SmallCard = styled.div<{ block?: boolean }>`
  width: ${props => props.block ? '100%' : 'auto'};
  background: ${props => props.theme.PRIMARY};
  color: ${props => props.theme.WHITE};
  border-radius: 20px;
  padding: 2rem 4rem;
`

export default function HighkeyAppCaseStudyPage() {
  return (
    <>
      <Header />
      <Banner />
      <Summary />
      <ProblemSpace />
      <DesignProcess />
      <SecondaryResearch />
      <Grid bg='PRIMARY' color='WHITE' p='3rem 0'>
        <Grid container>
          <Text.H5 bold={false}>
            After looking at some existing data, I wanted to find out why people are wearing their clothes less often, even though Gen Z, the generation that buys the most fashion, knows a lot about environmental issues. To understand this better, I talked to three Gen Z individuals living in Toronto who use social media for outfit inspiration.
          </Text.H5>
        </Grid>
      </Grid>
      <InterviewScript />

      <Grid container>
        <Title primary separator>Interview Script</Title>
        <Row>
          <Col>
            <P2 strong>Some of the questions that I used during the interviews:</P2>
          </Col>
          <Col />
        </Row>
        <Row>
          <img src="https://placehold.co/500x500" />
          <List>
            <ListItem>What apps do you typically use?</ListItem>
            <ListItem>What is your main goal when buying a clothing piece?</ListItem>
            <ListItem>Tell me about the last time you tried to give away your clothes. What was the biggest challenge to it?</ListItem>
            <ListItem>How many times you would say you wear a clothing piece, before giving away your clothes?</ListItem>
          </List>
        </Row>
      </Grid>

      <Grid container>
        <Title primary separator>Affinity Mapping</Title>
        <Row>
          <Col align="center">
            <img src="https://placehold.co/743x1178" />
            <img src="https://placehold.co/743x1178" />
            <img src="https://placehold.co/743x1178" /></Col>
        </Row>
      </Grid>

      <Grid container>
        <CardSection>
          <Title align="center">Themes</Title>
          <Row>
            <Col>
              <P1>Inspirational and Aspirational Shopping:</P1>
              <P1>
                Insight - Seeking specific styles, Using social media for quick fashion inspiration and planning outfits, The thrill of thrifting and finding unique pieces.
              </P1>
            </Col>
            <Col>
              <P1>Ethical and Quality Concerns:</P1>
              <P1>
                Insight - Ethical issues with certain brands affecting purchasing decisions.
                <br />
                Disappointment with the quality of expensive items from well-known brands.
              </P1>
            </Col>
          </Row>
          <Row>
            <Col>
              <P1>Fit and Sizing Challenges:</P1>
              <P1>
                Insight - Difficulty finding jeans that fit well for petite heights. Inconsistent sizing leading to items being too tight, loose, long, or short.
                <br />
                Online purchases not fitting well or matching expectations.
              </P1>
            </Col>
            <Col>
              <P1>Fit and Sizing Challenges:</P1>
              <P1>
                Insight - Difficulty finding jeans that fit well for petite heights. Inconsistent sizing leading to items being too tight, loose, long, or short.
                <br />
                Online purchases not fitting well or matching expectations.
              </P1>
            </Col>
          </Row>
        </CardSection>
      </Grid>

      <Grid container>
        <Title align="center">Epics</Title>
        <P2 align="center">Some of the Epics I end up with.</P2>
        <Row>
          <Col>
            <SmallCard block>
              <P1 strong align="center">Utilization & Wear Frequency</P1>
            </SmallCard>
          </Col>
          <Col>
            <SmallCard block>
              <P1 strong align="center">Seasonal Management</P1>
            </SmallCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <SmallCard block>
              <P1 strong align="center">Cataloging & Organizing</P1>
            </SmallCard>
          </Col>
          <Col>
            <SmallCard block>
              <P1 strong align="center">Sustainability & Education</P1>
            </SmallCard>
          </Col>
        </Row>
      </Grid>

      <Grid container>
        <Title primary align="center">Chosen Epic</Title>
        <Row>
          <Col>
            <SmallCard block>
              <P1 strong align="center">Utilization & Wear Frequency</P1>
            </SmallCard>
          </Col>
        </Row>
        <P1 primary>
          Since the interviewees explained how many  times they buy something or even receive hand-me-downs from parents  and forget them inside the wardrobe. I have chosen to target this problem and create a solution that helps Gen Z Canadians who are unsure about how style their clothes and end up forgetting about those clothes.
        </P1>
      </Grid>

      <Grid container>
        <Title primary separator>Persona</Title>
        <Row>
          <Col>
            <img src="https://placehold.co/550x826" />
            <br />
            <SmallCard block>
              <H2 align="center">Jordan, 21 student</H2>
            </SmallCard>
          </Col>
          <Col>
            <SmallCard>
              <H2>About</H2>
            </SmallCard>
            <br />
            <P1>
              Jordan, a Canadian Gen Z, struggles with a closet full  forgotten clothes, reflecting a broader issue of throwaway fashion culture. Despite a love for trendy and expressive outfits, he often feel overwhelmed by the abundance of choices.
            </P1>
            <br />
            <SmallCard>
              <H2>Needs</H2>
            </SmallCard>
            <br />
            <List>
              <li>Desires tools or methods to help plan outfits for the week efficiently.</li>
              <li>Values the experience and story behind clothing items, such as a leather jacket from a thrift store in Amsterdam.</li>
              <li>Prefers clothes that have a personal story or significance.</li>
            </List>
            <br />
            <SmallCard>
              <H2>Frustations</H2>
            </SmallCard>
            <List>
              <li>Forgets about clothes after purchase, leading to underutilization.</li>
              <li>Feels restricted by the lack of choices in the closet during the winter season.</li>
            </List>
          </Col>
        </Row>
      </Grid>
    </>
  )
}

