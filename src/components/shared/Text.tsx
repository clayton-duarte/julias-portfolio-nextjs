import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { ColorNames } from '~/theme';

export interface StyledTextProps {
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  align?: 'left' | 'right' | 'center' | 'justify';
  color?: ColorNames;
  bg?: ColorNames;
  bold?: boolean;
  size?: string;
  p?: string;
  m?: string;
}

const StyledText = styled.span<StyledTextProps>`
  background: ${(props) => {
    return props.bg ? props.theme[props.bg] : 'transparent';
  }};
  color: ${({ theme, color }) => {
    return color != null ? theme[color] : 'inherit';
  }};
  text-align: ${({ align: textAlign }) => {
    return textAlign ?? 'left';
  }};
  text-transform: ${({ transform }) => {
    return transform ?? 'none';
  }};
  font-weight: ${({ bold }) => {
    return bold ? '700' : '400';
  }};
  font-size: ${({ size }) => {
    return size ?? 'inherit';
  }};
  padding: ${({ p }) => {
    return p ?? 0;
  }};
  margin: ${({ m }) => {
    return m ?? 0;
  }};
`;

type TextProps = StyledTextProps & HTMLAttributes<HTMLParagraphElement>;

function Text({
  component = 'p',
  ...textProps
}: TextProps & {
  component?:
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'strong'
  | 'em'
  | 'code'
  | 'legend'
  | 'label';
}) {
  const Component = StyledText.withComponent(component);

  return (
    <Component
      {...textProps}
    />
  );
}

Text.P = (props: TextProps) => {
  return Text({ component: 'p', size: '16px', ...props });
};

Text.H1 = (props: TextProps) => {
  return Text({ component: 'h1', size: '64px', bold: true, ...props });
};

Text.H2 = (props: TextProps) => {
  return Text({ component: 'h2', size: '40px', bold: true, ...props });
};

Text.H3 = (props: TextProps) => {
  return Text({ component: 'h3', size: '32px', bold: true, ...props });
};

Text.H4 = (props: TextProps) => {
  return Text({ component: 'h4', size: '24px', bold: true, ...props });
};

Text.H5 = (props: TextProps) => {
  return Text({ component: 'h5', size: '20px', bold: true, ...props });
};

Text.H6 = (props: TextProps) => {
  return Text({ component: 'h6', size: '16px', bold: true, ...props });
};

Text.Span = (props: TextProps) => {
  return Text({ component: 'span', ...props });
};

Text.Strong = (props: TextProps) => {
  return Text({ component: 'strong', bold: true, ...props });
};

Text.Em = (props: TextProps) => {
  return Text({ component: 'em', ...props });
};

Text.Code = (props: TextProps) => {
  return Text({ component: 'code', ...props });
};

Text.Legend = (props: TextProps) => {
  return Text({ component: 'legend', size: '0.75rem', ...props });
};

Text.Label = (props: TextProps) => {
  return Text({ component: 'label', bold: true, ...props });
};

export default Text;

export { Text };
