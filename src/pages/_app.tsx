import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { ThemeProvider } from "@/theme";

const cache = createCache({ key: "next" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
