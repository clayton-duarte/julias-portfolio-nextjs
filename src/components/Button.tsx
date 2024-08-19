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
  text-transform: ${({ transform }) => transform ?? 'none'};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  border: 1px solid ${(props) => props.color ? props.theme[props.color] : props.theme.PRIMARY};
  font-size: ${({ size }) => (size ?? 'inherit')};
  background: ${(props) => getBgColor(props)};
  color: ${(props) => getTextColor(props)};
  transition: filter 200ms;
  border-radius: 10px;
  padding: .75rem 3rem;
  justify-self: start;
  display: inline;
  cursor: pointer;
  border: 1px solid
    ${(props) => (props.color ? props.theme[props.color] : props.theme.PRIMARY)};
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

export default Button

export { Button, ButtonLink };
