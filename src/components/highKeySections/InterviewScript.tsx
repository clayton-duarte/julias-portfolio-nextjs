import Image from 'next/image';
import Link from 'next/link';

import takingNotes from './assets/taking-notes.png';
import Grid from '../shared/Grid';
import Text from '../shared/Text';

export default function InterviewScript() {
  return (
    <Grid
      container
      p="24px"
    >
      <Text.H4
        m="3rem 0 0 0"
        color="PRIMARY"

      >
        Interview Script
      </Text.H4>
      <Grid
        m="3rem 0"
        justify="space-between"
        md="minmax(auto, 50%) minmax(auto, 450px)"
        align="center"
      >
        <Text.H5 bold={false}>
          Some of the questions that I used during the interviews:
        </Text.H5>
        <span />
        <Grid>
          <Image
            src={takingNotes}
            alt="high-key-app"
            priority
          />
        </Grid>
        <Grid.Ul
          size="1.5rem"
          gap="3rem"
        >
          <li>
            <Text.H5 bold={false}>What apps do you typically use?</Text.H5>
          </li>
          <li>
            <Text.H5 bold={false}>
              What is your main goal when buying a clothing piece?
            </Text.H5>
          </li>
          <li>
            <Text.H5 bold={false}>
              Tell me about the last time you tried to give away your clothes.
              What was the biggest challenge to it?
            </Text.H5>
          </li>
          <li>
            <Text.H5 bold={false}>
              How many times you would say you wear a clothing piece, before
              giving away your clothes?
            </Text.H5>
          </li>
        </Grid.Ul>
      </Grid>
      <Grid p="2rem 0">
        <Link
          target="_blank"
          href="https://docs.google.com/document/d/131w2mqgb22zPXgefqUwjIfZnuQKTOpKNO-qrCykudUY/edit"
        >
          <Text.H6
            align="center"
            bold={false}
          >
            View the full user interview here.
          </Text.H6>
        </Link>
      </Grid>
    </Grid>
  );
}
