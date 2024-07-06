import Image from "next/image";

import persona1 from '~/assets/persona1.png'
import persona2 from '~/assets/persona2.png'
import persona3 from '~/assets/persona3.png'

import Grid from "../Grid";
import Text from "../Text";

export default function WhatPeopleSay() {
  return (
    <>
      <Grid container p='3rem'>
        <Text.H4 bold={false} align='center'>What people are saying?</Text.H4>
        <Grid xs='minmax(auto, 500px) minmax(auto, 500px)' align="center" justify='center' gap='3rem'>
          <Image
            src={persona1}
            alt="high-key-app"
            priority
          />
          <Text.H5>
            “I get a lot of hand-me-downs so a lot of the hand-me-downs I keep and then I never wear them so they’re always in the back of my closet.”
          </Text.H5>
          <Image
            src={persona2}
            alt="high-key-app"
            priority
          />
          <Text.H5>
            “Let’s organize this mess!” You know, only keep the essentials. The biggest challenge? Definitely deciding which pieces are the essentials”
          </Text.H5>
          <Image
            src={persona3}
            alt="high-key-app"
            priority
          />
          <Text.H5>
            “My biggest challenge was to actually not keep the clothes that I don’t wear anymore.”
          </Text.H5>
        </Grid>
      </Grid>
      <Grid bg='PRIMARY' color='WHITE' p='3rem 0'>
        <Grid container p='0 3rem'>
          <Text.H5 bold={false}>
            I decided to focus on the theme of{' '}
            <Text.Strong>Utilization & Wear Frequency</Text.Strong>.{' '}
            Many users mentioned how often they buy new clothes or receive hand-me-downs from parents and then forget about them inside their wardrobe. I have chosen to address this problem by creating a solution that helps Gen Z Canadians who are unsure about how to style their clothes and end up forgetting about them.
          </Text.H5>
        </Grid>
      </Grid>
    </>
  )
}