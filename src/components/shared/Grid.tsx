import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { Breakpoints, ColorNames } from '~/theme';

type FourAxisProp =
  | string
  | [string, string]
  | [string, string, string, string];

function fromFourAxisToString(prop?: FourAxisProp): string | undefined {
  if (typeof prop === 'string') {
    return prop;
  }

  if (Array.isArray(prop)) {
    return prop.join(' ');
  }

  return undefined;
}

export interface StyledGridProps {
  bg?: ColorNames;
  color?: ColorNames;
  justify?: string;
  justifySelf?: string;
  align?: string;
  alignSelf?: string;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xsy?: string;
  smy?: string;
  mdy?: string;
  lgy?: string;
  xly?: string;
  gap?: string;
  xsGap?: string;
  smGap?: string;
  mdGap?: string;
  lgGap?: string;
  xlGap?: string;
  m?: FourAxisProp;
  xsM?: string;
  smM?: string;
  mdM?: string;
  lgM?: string;
  xlM?: string;
  p?: FourAxisProp;
  xsP?: string;
  smP?: string;
  mdP?: string;
  lgP?: string;
  xlP?: string;
  minHeight?: string;
  maxHeight?: string;
  container?: boolean;
  height?: string;
  area?: string;
  radius?: string;
  size?: string;
}

function getMinHeight(props: StyledGridProps) {
  if (props.minHeight) {
    return props.minHeight;
  }

  if (props.xsy || props.mdy || props.lgy || props.xly) {
    return '100%';
  }

  return 'min-content';
}

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  background: ${(props) => {
    return props.bg ? props.theme[props.bg] : 'transparent';
  }};
  color: ${(props) => {
    return props.color ? props.theme[props.color] : 'inherit';
  }};
  padding: ${(props) => {
    return fromFourAxisToString(props.xsP ?? props.p) ?? props.container;
  }};
  max-width: ${(props) => {
    return props.container ? Breakpoints.XL : '100%';
  }};
  font-size: ${(props) => {
    return props.size ? props.size : 'inherit';
  }};
  max-height: ${(props) => {
    return props.maxHeight ?? 'max-content';
  }};
  justify-self: ${(props) => {
    return props.justifySelf ?? 'start';
  }};
  justify-content: ${(props) => {
    return props.justify ?? 'start';
  }};
  grid-template-columns: ${(props) => {
    return props.xs ?? '1fr';
  }};
  grid-template-rows: ${(props) => {
    return props.xsy ?? 'auto';
  }};
  gap: ${(props) => {
    return props.xsGap ?? props.gap ?? '1rem';
  }};
  align-self: ${(props) => {
    return props.alignSelf ?? 'auto';
  }};
  align-items: ${(props) => {
    return props.align ?? 'start';
  }};
  border-radius: ${(props) => {
    return props.radius ?? '0';
  }};
  grid-area: ${(props) => {
    return props.area ?? 'auto';
  }};
  height: ${(props) => {
    return props.height ?? 'auto';
  }};
  position: relative;
  width: 100%;
  margin: ${(props) => {
    return fromFourAxisToString(props.xsM ?? props.m) ?? props.container
      ? '0 auto'
      : 0;
  }};
  min-height: ${(props) => {
    return getMinHeight(props);
  }};
  // Responsive
  @media (min-width: ${Breakpoints.SM}) {
    grid-template-columns: ${(props) => {
    return props.sm ?? props.xs ?? '1fr';
  }};
    grid-template-rows: ${(props) => {
    return props.smy ?? props.xsy ?? 'auto';
  }};
    gap: ${(props) => {
    return props.smGap ?? props.xsGap ?? props.gap ?? '1rem';
  }};
    padding: ${(props) => {
    return fromFourAxisToString(props.smP ?? props.xsP ?? props.p) ?? 0;
  }};
    margin: ${(props) => {
    return fromFourAxisToString(props.smM ?? props.xsM ?? props.m) ??
      props.container
      ? '0 auto'
      : 0;
  }};
  }
  @media (min-width: ${Breakpoints.MD}) {
    grid-template-columns: ${(props) => {
    return props.md ?? props.sm ?? props.xs ?? '1fr';
  }};
    grid-template-rows: ${(props) => {
    return props.mdy ?? props.smy ?? props.xsy ?? 'auto';
  }};
    gap: ${(props) => {
    return props.mdGap ?? props.smGap ?? props.xsGap ?? props.gap ?? '1rem';
  }};
    padding: ${(props) => {
    return (
      fromFourAxisToString(props.mdP ?? props.smP ?? props.xsP ?? props.p) ??
      0
    );
  }};
    margin: ${(props) => {
    return fromFourAxisToString(
      props.mdM ?? props.smM ?? props.xsM ?? props.m,
    ) ?? props.container
      ? '0 auto'
      : 0;
  }};
  }
  @media (min-width: ${Breakpoints.LG}) {
    grid-template-columns: ${(props) => {
    return props.lg ?? props.md ?? props.sm ?? props.xs ?? '1fr';
  }};
    grid-template-rows: ${(props) => {
    return props.lgy ?? props.mdy ?? props.smy ?? props.xsy ?? 'auto';
  }};
    gap: ${(props) => {
    return (
      props.lgGap ??
      props.mdGap ??
      props.smGap ??
      props.xsGap ??
      props.gap ??
      '1rem'
    );
  }};
    padding: ${(props) => {
    return (
      fromFourAxisToString(
        props.lgP ?? props.mdP ?? props.smP ?? props.xsP ?? props.p,
      ) ?? 0
    );
  }};
    margin: ${(props) => {
    return fromFourAxisToString(
      props.lgM ?? props.mdM ?? props.smM ?? props.xsM ?? props.m,
    ) ?? props.container
      ? '0 auto'
      : 0;
  }};
  }
  @media (min-width: ${Breakpoints.XL}) {
    grid-template-columns: ${(props) => {
    return props.xl ?? props.lg ?? props.md ?? props.sm ?? props.xs ?? '1fr';
  }};
    grid-template-rows: ${(props) => {
    return (
      props.xly ?? props.lgy ?? props.mdy ?? props.smy ?? props.xsy ?? 'auto'
    );
  }};
    gap: ${(props) => {
    return (
      props.xlGap ??
      props.lgGap ??
      props.mdGap ??
      props.smGap ??
      props.xsGap ??
      props.gap ??
      '1rem'
    );
  }};
    padding: ${(props) => {
    return (
      fromFourAxisToString(
        props.xlP ??
        props.lgP ??
        props.mdP ??
        props.smP ??
        props.xsP ??
        props.p,
      ) ?? 0
    );
  }};
    margin: ${(props) => {
    return fromFourAxisToString(
      props.xlM ??
      props.lgM ??
      props.mdM ??
      props.smM ??
      props.xsM ??
      props.m,
    ) ?? props.container
      ? '0 auto'
      : 0;
  }};
  }
`;

export type GridProps = StyledGridProps & HTMLAttributes<HTMLDivElement>;

function Grid({
  component = 'div',
  ...props
}: GridProps & {
  component?:
  | 'div'
  | 'section'
  | 'article'
  | 'main'
  | 'aside'
  | 'header'
  | 'footer'
  | 'nav'
  | 'form'
  | 'ul'
  | 'ol'
  | 'li';
}) {
  const Component = StyledGrid.withComponent(component);

  return (
    <Component
      {...props}
    />
  );
}

Grid.Main = (props: GridProps) => {
  return Grid({ component: 'main', xsy: 'auto', ...props });
};

Grid.Section = (props: GridProps) => {
  return Grid({ component: 'section', ...props });
};

Grid.Article = (props: GridProps) => {
  return Grid({ component: 'article', p: '1.5rem', ...props });
};

Grid.Header = (props: GridProps) => {
  return Grid({ component: 'header', p: '1rem 1.5rem', ...props });
};

Grid.Footer = (props: GridProps) => {
  return Grid({ component: 'footer', p: '1rem 1.5rem', ...props });
};

Grid.Aside = (props: GridProps) => {
  return Grid({ component: 'aside', ...props });
};

Grid.Nav = (props: GridProps) => {
  return Grid({ component: 'nav', p: '1rem 1.5rem', ...props });
};

Grid.Form = (props: GridProps) => {
  return Grid({ component: 'form', ...props });
};

Grid.Ul = (props: GridProps) => {
  return Grid({ component: 'ul', p: '0 0 0 2rem', ...props });
};

Grid.Ol = (props: GridProps) => {
  return Grid({ component: 'ol', p: '0 0 0 2rem', ...props });
};

Grid.Li = (props: GridProps) => {
  return Grid({ component: 'li', ...props });
};

export default Grid;
