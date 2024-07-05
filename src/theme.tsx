import { Nunito_Sans } from "next/font/google";

import { ThemeProvider as Provider, Global, Theme } from '@emotion/react';

const nunito = Nunito_Sans({
  adjustFontFallback: false,
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export function size(number: number) {
  return `calc(1rem * ${number})`;
}

export enum Breakpoints {
  XS = '0px',
  SM = '425px',
  MD = '768px',
  LG = '1024px',
  XL = '1280px',
}

export type BreakpointNames = keyof typeof Breakpoints;

export enum Colors {
  WHITE = '#F8F7F7',
  LIGHT = '#C0B9BA',
  DARK = '#564E4E',
  BLACK = '#272424',
  PRIMARY = '#831B0E',
  SECONDARY = '#FFC700',
  INFO = '#831B0E',
  SUCCESS = '#36701B',
  WARNING = '#FFC700',
  DANGER = '#831B0E',
}

export type ColorNames = keyof typeof Colors;

declare module '@emotion/react' {
  export interface Theme {
    WHITE: string;
    LIGHT: string;
    DARK: string;
    BLACK: string;
    PRIMARY: string;
    SECONDARY: string;
    INFO: string;
    SUCCESS: string;
    WARNING: string;
    DANGER: string;
  }

  export function useTheme(): Theme;
}

export const theme: Theme = Colors;

function GlobalStyles() {
  return (
    <Global
      styles={(t) => `
        html,
        body,
        #__next {
          font-family: ${nunito.style.fontFamily};
          font-style: ${nunito.style.fontStyle};
          background-color: ${t.WHITE};
          color: ${t.BLACK};
          font-size: 16px;
          height: 100%;
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: ${t.BLACK};
        }
      `}
    />
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider theme={theme}>
      {children}
      <GlobalStyles />
    </Provider>
  );
}