import type { AppProps } from 'next/app';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeProvider } from '~/theme';

const cache = createCache({ key: 'next' });

const StyledMain = styled.main`
  flex-direction: column;
  display: flex;
  gap: 3rem;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <StyledMain>
          <Component {...pageProps} />
        </StyledMain>
      </ThemeProvider>
    </CacheProvider>
  );
}
