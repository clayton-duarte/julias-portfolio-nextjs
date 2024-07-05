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
  background: ${(props) => (props.bg ? props.theme[props.bg] : 'transparent')};
  color: ${({ theme, color }) => color != null ? theme[color] : 'inherit'};
  text-align: ${({ align: textAlign }) => textAlign ?? 'left'};
  text-transform: ${({ transform }) => transform ?? 'none'};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  font-size: ${({ size }) => (size ?? '1rem')};
  padding: ${({ p }) => p ?? 0};
  margin: ${({ m }) => m ?? 0};
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

  return <Component {...textProps} />;
}

Text.P = (props: TextProps) => Text({ component: 'p', ...props });

Text.H1 = (props: TextProps) => Text({ component: 'h1', size: '5rem', bold: true, ...props });

Text.H2 = (props: TextProps) => Text({ component: 'h2', size: '3.8125rem', bold: true, ...props });

Text.H3 = (props: TextProps) => Text({ component: 'h3', size: '3rem', bold: true, ...props });

Text.H4 = (props: TextProps) => Text({ component: 'h4', size: '2.25rem', bold: true, ...props });

Text.H5 = (props: TextProps) => Text({ component: 'h5', size: '1.688rem', bold: true, ...props });

Text.H6 = (props: TextProps) => Text({ component: 'h6', size: '1.312rem', bold: true, ...props });

Text.Span = (props: TextProps) => Text({ component: 'span', ...props });

Text.Strong = (props: TextProps) =>
  Text({ component: 'strong', bold: true, ...props });

Text.Em = (props: TextProps) => Text({ component: 'em', ...props });

Text.Code = (props: TextProps) => Text({ component: 'code', ...props });

Text.Legend = (props: TextProps) => Text({ component: 'legend', size: '0.75rem', ...props });

Text.Label = (props: TextProps) =>
  Text({ component: 'label', bold: true, ...props });

export default Text;

export { Text };