import { ReactNode } from 'react';

import Grid from '~/components/Grid';
import Text from '~/components/Text';

export default function BigQuote({ children }: { children: ReactNode }) {
  return < Grid
    bg="PRIMARY"
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
    ;
}