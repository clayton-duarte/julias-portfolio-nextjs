import Image from 'next/image';
import { ReactNode } from 'react';

import styled from '@emotion/styled';

import questionMark from '~/assets/question-mark.svg';
import Grid from '~/components/Grid';
import Text from '~/components/Text';

const StyledImage = styled(Image)`
transform: translate(-50%, -50%);
position: absolute;
z-index: -1;
left: 50%;
top: 50%;
`

export default function QuestionTitle(
  { children }: {
    children: ReactNode
  }) {
  return (
    <Grid p='120px 0' justify='center' align='center'>
      <StyledImage
        src={questionMark}
        alt="high-key-app"
        priority
      />
      <Text.H3
        align='center'
      >
        {children}
      </Text.H3>
    </Grid>
  );
}