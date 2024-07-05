import Image from "next/image";
import Link from "next/link";

import Grid from "../Grid";
import Hr from "../Hr";
import Text from "../Text";

export default function InterviewScript() {
  return (
    <Grid container p='3rem 0'>
      <Text.H4 m='3rem 0 0 0' color='PRIMARY'>Interview Script</Text.H4>
      <Hr />
      <Grid m='3rem 0' gap='3rem' xs="1fr 1fr" align='center'>
        <Text.H5>
          Some of the questions that I used during the interviews:
        </Text.H5>
        <span />
        <Grid>
          <Image
            src="/taking-notes.png"
            alt="high-key-app"
            width={500}
            height={500}
            priority
          />
        </Grid>
        <Grid.Ul gap='3rem'>
          <li>
            <Text.H5 bold={false}>
              What apps do you typically use?
            </Text.H5>
          </li>
          <li>
            <Text.H5 bold={false}>
              What is your main goal when buying a clothing piece?
            </Text.H5>
          </li>
          <li>
            <Text.H5 bold={false}>
              Tell me about the last time you tried to give away your clothes. What was the biggest challenge to it?
            </Text.H5>
          </li>
          <li>
            <Text.H5 bold={false}>
              How many times you would say you wear a clothing piece, before giving away your clothes?
            </Text.H5>
          </li>
        </Grid.Ul>
      </Grid>
      <Grid m='4rem 0'>
        <Link href="https://docs.google.com/document/d/131w2mqgb22zPXgefqUwjIfZnuQKTOpKNO-qrCykudUY/edit">
          <Text.H6 align='center' bold={false}>
            View the full user interview here.
          </Text.H6>
        </Link>
      </Grid>
    </Grid>
  )
}