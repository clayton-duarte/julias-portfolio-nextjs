import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorNames } from '~/theme';

export interface ButtonProps {
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  outlined?: boolean;
  color?: ColorNames;
  bold?: boolean;
  size?: string;
}

function getBgColor(props: ButtonProps & { theme: Theme }): string {
  if (props.outlined) return props.theme.WHITE;

  return props.color ? props.theme[props.color] : props.theme.PRIMARY;
}

function getTextColor(props: ButtonProps & { theme: Theme }): string {
  if (!props.outlined) return props.theme.WHITE;

  return props.color ? props.theme[props.color] : props.theme.PRIMARY;
}

const Button = styled.button<ButtonProps>`
  text-transform: ${({ transform }) => {
    return transform ?? 'none';
  }};
  font-weight: ${({ bold }) => {
    return bold ? '700' : '400';
  }};
  border: 1px solid
    ${(props) => {
      return props.color ? props.theme[props.color] : props.theme.PRIMARY;
    }};
  font-size: ${({ size }) => {
    return size ?? 'inherit';
  }};
  background: ${(props) => {
    return getBgColor(props);
  }};
  color: ${(props) => {
    return getTextColor(props);
  }};
  transition: filter 200ms;
  border-radius: 10px;
  padding: 0.75rem 3rem;
  justify-self: start;
  display: inline;
  cursor: pointer;
  border: 1px solid
    ${(props) => {
      return props.color ? props.theme[props.color] : props.theme.PRIMARY;
    }};
  &:hover:not(:disabled) {
    filter: opacity(0.8);
    text-decoration: none;
  }
  &:disabled {
    filter: greyscale(1);
    cursor: not-allowed;
  }
`;

const ButtonLink = styled(Button.withComponent('a'))`
  text-decoration: none;
`;

export default Button;

export { Button, ButtonLink };
