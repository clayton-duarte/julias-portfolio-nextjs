import Image from 'next/image'

import behaviours from '~/assets/behaviours.png';
import motivationGoals from '~/assets/motivation-goals.png';
import painPoints from '~/assets/pain-points.png';

import Grid from "../Grid";
import Hr from "../Hr";
import Text from "../Text";

export default function AffinityMapping() {
  return (
    <>
      <Grid bg='PRIMARY' color='WHITE' p='5rem 0'>
        <Grid container p='0 3rem'>
          <Text.H5 bold={false}>
            I used a Affinity mapping to quickly organize the Insights from the interviews.          </Text.H5>
        </Grid>
      </Grid>
      <Grid container p='0 3rem'>
        <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Affinity Mapping</Text.H4>
        <Hr />
        <Grid m='3rem 0 0 0' justify="center" xs='minmax(auto, 500px)' gap='.25rem'>
          <Text.H6 align='center'>Pain Points</Text.H6>
          <Hr />
        </Grid>
        <Grid justify="center" xs='auto'>
          <Image src={painPoints} alt='Pain Points' priority />
        </Grid>
        <Grid m='3rem 0 0 0' justify="center" xs='minmax(auto, 500px)' gap='.25rem'>
          <Text.H6 align='center'>Motivation/Goals</Text.H6>
          <Hr />
        </Grid>
        <Grid justify="center" xs='auto'>
          <Image src={motivationGoals} alt='Motivation/Goals' priority />
        </Grid>
        <Grid m='3rem 0 0 0' justify="center" xs='minmax(auto, 500px)' gap='.25rem'>
          <Text.H6 align='center'>Behaviours</Text.H6>
          <Hr />
        </Grid>
        <Grid justify="center" xs='auto'>
          <Image src={behaviours} alt='Behaviours' priority />
        </Grid>
      </Grid>
    </>
  )
}