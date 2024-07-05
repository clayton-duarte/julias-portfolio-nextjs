import styled from "@emotion/styled";

import Container from "~/components/Container";
import Header from "~/components/Header";
import BannerSection from "~/components/highKeySections/Banner";
import DesignProcessSection from "~/components/highKeySections/DesignProcess";
import ProblemSpaceSection from "~/components/highKeySections/ProblemSpace";
import SummarySection from "~/components/highKeySections/Summary";

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
      <BannerSection />
      <SummarySection />
      <ProblemSpaceSection />
      <DesignProcessSection />

      <Container>
        <Title primary separator>Secondary Research</Title>
        <Row>
          <Col>
            <Row>
              <Col>
                <H1>73%</H1>
              </Col>
              <Col>
                <P2>of Gen Z are the most willing to pay more for sustainable products.</P2>
              </Col>
            </Row>
            <a href="#">Accordingly to FirstInsight</a>
          </Col>
          <H2>But</H2>
          <Col>
            <Row>
              <Col>
                <H1>36%</H1>
              </Col>
              <Col>
                <P2>The number of times a garment is worn has declined  in 15 years</P2>
              </Col>
            </Row>
            <a href="#">Accordingly to FirstInsight</a>
          </Col>
        </Row>
      </Container>

      <Container>
        <Title primary separator>Assumptions</Title>
        <Row>
          <Col grow={1}>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians do not have access to information about where to donate their clothes.</P2>
            </Row>
          </Col>
          <Col grow={1}>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians have a sustainable mindset, but overbuying is still a big struggle for them.</P2>
            </Row>
          </Col>
          <Col grow={1}>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians are more likely to buy clothes in person than online.</P2>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians tend to purchase excessive clothing due to attractive prices, discounts, and sales.</P2>
            </Row>
          </Col>
          <Col>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians use social media as a reference for outfit ideas.</P2>
            </Row>
          </Col>
          <Col />
        </Row>
        <Title align="center" primary>Chosen assumption</Title>
        <Row>
          <Col />
          <Col>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians tend to purchase excessive clothing due to attractive prices, discounts, and sales.</P2>
            </Row>
          </Col>
          <Col />
        </Row>
      </Container>

      <Container>
        <Title primary separator>Hypothesis</Title>
        <Row>
          <Col>
            <P2>
              <strong>I believe that</strong> Gen Z people overbuy and end up forgetting to wear their clothes.
            </P2>
            <P2>
              <strong>I will know I am right</strong> when 3 out 5 of my interviewees mentioned that they forget their clothes in their wardrobe.
            </P2>
          </Col>
          <Col />
        </Row>
        <Row align="center">
          <img src="https://placehold.co/500x500" />
          <P2 strong>John, Gen Z Canadian, 22 years old. Used to live in Hamilton but recently moved to TO to live with his roommates. His style is casual and sport.</P2>
        </Row>
        <Row align="center">
          <img src="https://placehold.co/500x500" />
          <P2 strong>Emma, Gen Z Canadian, 19 years old. Living with her parents in Toronto, so she can save money. Have a more pop colour clothing style, uses Instagram for inspiration.</P2>
        </Row>
        <Row align="center">
          <img src="https://placehold.co/500x500" />
          <P2 strong>Gabriella, Gen Z Canadian, 22 years old. Lives in TO, she got her first job last year and uses Tiktok and Pinterest for clothing inspo.</P2>
        </Row>
      </Container>

      <Container>
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
      </Container>

      <Container>
        <Title primary separator>Affinity Mapping</Title>
        <Row>
          <Col align="center">
            <img src="https://placehold.co/743x1178" />
            <img src="https://placehold.co/743x1178" />
            <img src="https://placehold.co/743x1178" /></Col>
        </Row>
      </Container>

      <Container>
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
      </Container>

      <Container>
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
      </Container>

      <Container>
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
      </Container>

      <Container>
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
      </Container>
    </>
  )
}

