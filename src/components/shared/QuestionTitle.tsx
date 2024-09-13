import Image from 'next/image';
import { ReactNode } from 'react';

import styled from '@emotion/styled';

import Grid from '~/components/shared/Grid';
import Text from '~/components/shared/Text';

import questionMark from './assets/question-mark.svg';

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
    <Grid
      align="center"
      justify="center"
      p="120px 0"
    >
      <StyledImage
        priority
        alt="high-key-app"
        src={questionMark}
      />
      <Text.H3
        align="center"
      >
        {children}
      </Text.H3>
    </Grid>
  );
}