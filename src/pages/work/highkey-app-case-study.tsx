import styled from "@emotion/styled";

import Grid from "~/components/Grid";
import Header from "~/components/Header";
import AffinityMapping from "~/components/highKeySections/AffinityMapping";
import Banner from "~/components/highKeySections/Banner";
import DesignProcess from "~/components/highKeySections/DesignProcess";
import InterviewScript from "~/components/highKeySections/InterviewScript";
import ProblemSpace from "~/components/highKeySections/ProblemSpace";
import SecondaryResearch from "~/components/highKeySections/SecondaryResearch";
import Summary from "~/components/highKeySections/Summary";
import ThemesSection from "~/components/highKeySections/ThemesSection";
import WhatPeopleSay from "~/components/highKeySections/WhatPeopleSay";
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
      <InterviewScript />
      <AffinityMapping />
      <ThemesSection />
      <WhatPeopleSay />

      <Grid container p='0 3rem'>
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

