import type { AppProps } from "next/app";

import { ThemeProvider } from "@/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

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
