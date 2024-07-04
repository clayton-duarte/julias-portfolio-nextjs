// import Image from "next/image";

import styled from "@emotion/styled";

import Container from "~/components/Container";
import Header from "~/components/Header";

const Row = styled.div<{ align?: string }>`
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

const H2 = styled.h2`
  color: ${props => props.theme.PRIMARY};
  font-size: 36px;
`

const BgSection = styled.section`
  background-color: ${props => props.theme.PRIMARY};
  color: ${props => props.theme.WHITE};
`

const Col = styled.div<{ align?: string }>`
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

const P1 = styled.p`
  margin: 0;
`

const P2 = styled.p<{ strong?: boolean }>`
  font-weight: ${props => props.strong ? '700' : '400'};
  font-size: 27px;
  margin: 0;
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

export default function HighkeyAppCaseStudyPage() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          {/* <Image
            src="/high-key-app.png"
            alt="high-key-app"
            width={338}
            height={688}
            priority
          /> */}
          <img src="https://placehold.co/620x610" />
          <div>
            <H1>Case Study - HighKey app</H1>
            <H2>The HighKey app helps users to mix and match outfits while they can check their wearing habits.</H2>
          </div>
        </Row>
      </Container>
      <BgSection>
        <Container>
          <Row>
            <Col>
              <Title>My role</Title>
              <P1>UX/UI and Research</P1>
            </Col>
            <Col>
              <Title>Industry</Title>
              <P1>Fashion, Retail</P1>
            </Col>
            <Col>
              <Title>Tools used</Title>
              <P1>
                Figma, Google slides, Google Docs,
                <br />
                Photoshop, Illustrator, Optimal Workshop
              </P1>
            </Col>
            <Col>
              <Title>Duration</Title>
              <P1>May 2024 - July 5</P1>
            </Col>
          </Row>
        </Container>
      </BgSection>
      <Container>
        <Title primary>Problem Space</Title>
        <P2>
          Gen Z Canadians, aged 12-27, struggle to plan their outfits, leading to overbuying or underusing their clothing pieces.
        </P2>
        <P2>
          This problem occurs because they often forget about the clothes they own after purchase. As a result, items are underutilized or donated after minimal use. Addressing this issue is crucial to help them make more conscious purchasing decisions, save money and optimize their wardrobe.
        </P2>
      </Container>
      <Container>
        <CardSection>
          <Title align="center">Design Process</Title>
          <Row>
            <Col>
              <img src="https://placehold.co/126x126" />
              <P2>Empathize</P2>
              <ul>
                <li>Secondary</li>
                <li>Research</li>
                <li>User Interviews</li>
              </ul>
            </Col>
            <Col>
              <img src="https://placehold.co/126x126" />
              <P2>Define</P2>
              <ul>
                <li>User Interviews</li>
                <li>Secondary Research</li>
              </ul>
            </Col>
            <Col>
              <img src="https://placehold.co/126x126" />
              <P2>Ideate</P2>
            </Col>
            <Col>
              <img src="https://placehold.co/126x126" />
              <P2>Prototype</P2>
            </Col>
            <Col>
              <img src="https://placehold.co/126x126" />
              <P2>Test</P2>
            </Col>
          </Row>
        </CardSection>
      </Container >
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
          </Col>
        </Row>
      </Container>
      <Container>
        <Title primary separator>Assumptions</Title>
        <Row>
          <Col>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians do not have access to information about where to donate their clothes.</P2>
            </Row>
          </Col>
          <Col>
            <Row>
              <img src="https://placehold.co/62x62" />
              <P2>Gen Z Canadians have a sustainable mindset, but overbuying is still a big struggle for them.</P2>
            </Row>
          </Col>
          <Col>
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
        <Title primary>Chosen assumption</Title>
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
    </>
  )
}

