import Image from 'next/image';

import kijijiPng from '~/assets/kijiji.png'
import Button from '~/components/Button';
import Grid from '~/components/Grid';
import Text from '~/components/Text';

export default function KijijiSection() {
  return (
    <Grid bg='PURPLE' color='WHITE' p="120px 0">
      <Grid container xs='minmax(auto, 360px) minmax(auto, 670px)' gap="100px" align='center' justify='center'>

        <Grid gap='48px' p=' 0 0 0'>
          <Grid gap='0'>
            <Text.H2>BrainStation X Kijiji</Text.H2>
            <Text.P>UX/UI Design, Product Design, Design Sprint</Text.P>
          </Grid>
          <Text.P size='24px'>
            A 24-hour hackathon, where the our cross-functional team were tasked with designing a solution to help small business and local sellers on Kijiji’s platform.
          </Text.P>
          <Button color='PURPLE'>View project</Button>
        </Grid>
        <Image
          src={kijijiPng}
          alt="highkey-cellphone"
          priority
        />

      </Grid>
    </Grid>
  )
}