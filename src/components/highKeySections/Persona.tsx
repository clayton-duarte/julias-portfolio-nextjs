import Image from "next/image";

import styled from "@emotion/styled";

import jordan from '~/assets/jordan.jpg'
import { Breakpoints } from "~/theme";

import Grid from "../Grid";
import Text from "../Text";

const GridBorderLeft = styled(Grid)`
  @media (min-width: ${Breakpoints.MD}) {
    border-left: 2px solid ${(props) => props.theme.BLACK};
    padding-left: 5rem;
  }
`

const GridBorderTop = styled(Grid)`
  @media (min-width: ${Breakpoints.MD}) {
    border-top: 2px solid ${(props) => props.theme.BLACK};
  }
`

const GridBorderTopLeft = styled(GridBorderLeft)`
  @media (min-width: ${Breakpoints.MD}) {
    border-top: 2px solid ${(props) => props.theme.BLACK};
  }
`

export default function Persona() {
  return (
    <Grid container p='3rem' gap='3rem'>
      <Text.H4 color='PRIMARY'>Persona</Text.H4>
      <Grid m='3rem 0'>
        <Text.H4 bold={false}>About</Text.H4>
        <Text.H5 bold={false} >
          Jordan, a Canadian Gen Z, struggles with a closet full  forgotten clothes, reflecting a broader issue of throwaway fashion culture. Despite a love for trendy and expressive outfits, he often feel overwhelmed by the abundance of choices.
        </Text.H5>
      </Grid>
      <Grid md='minmax(auto, 550px) auto' gap='0' align='justify'>
        <GridBorderTop>
          <Image
            src={jordan}
            alt="high-key-app"
            priority
          />
        </GridBorderTop>
        <GridBorderTopLeft xsP='3rem 0' mdP='3rem' align='center'>
          <Grid>
            <Text.H4 bold={false}>Needs</Text.H4>
            <Grid.Ul size="1.5rem" gap='2rem'>
              <li>
                <Text.H5 bold={false}>
                  Desires tools or methods to help plan outfits for the week efficiently.
                </Text.H5>
              </li>
              <li>
                <Text.H5 bold={false}>
                  Values the experience and story behind clothing items, such as a leather jacket from a thrift store in Amsterdam.
                </Text.H5>
              </li>
              <li>
                <Text.H5 bold={false}>
                  Prefers clothes that have a personal story or significance.
                </Text.H5>
              </li>
            </Grid.Ul>
          </Grid>
        </GridBorderTopLeft>
        <Grid align="center" p='1rem'>
          <Grid>
            <Text.H4 bold={false} align='center'>Jordan, 21 student</Text.H4>
            <Text.H5 bold={false} align='center'>
              “I get so frustrated because I have clothes that I’m attached to, but I always forget about them and just remember when I decluttering my closet.”
            </Text.H5>
          </Grid>
        </Grid>
        <GridBorderLeft xsP='3rem 0' mdP='0 3rem'>
          <Text.H4 bold={false}>Frustations</Text.H4>
          <Grid.Ul size="1.5rem" gap='2rem'>
            <li>
              <Text.H5 bold={false}>
                Forgets about clothes after purchase, leading to underutilization.              </Text.H5>
            </li>
            <li>
              <Text.H5 bold={false}>
                Feels restricted by the lack of choices in the closet during the winter season.              </Text.H5>
            </li>
          </Grid.Ul>
        </GridBorderLeft>
      </Grid>
    </Grid>
  )
}