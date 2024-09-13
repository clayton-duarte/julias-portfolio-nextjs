import { ReactNode } from 'react';

import Grid, { type GridProps } from '~/components/shared/Grid';
import Text from '~/components/shared/Text';

export default function BigQuote({ children, bg = "RED" }: {
  children: ReactNode;
  bg?: GridProps['bg'];
}) {
  return (
    <Grid
      bg={bg}
      color="WHITE"
      p="3rem 0"
    >
      <Grid
        container
        p="75px 24px"
      >
        <Text.H4>
          {children}
        </Text.H4>
      </Grid>
    </Grid>
  );
}