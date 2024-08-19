import styled from '@emotion/styled';

import { ColorNames } from '~/theme';

export interface ButtonProps {
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  color?: ColorNames;
  bold?: boolean;
  size?: string;
}

const Button = styled.button<ButtonProps>`
  text-transform: ${({ transform }) => transform ?? 'capitalize'};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  border: 1px solid ${(props) => props.color ? props.theme[props.color] : props.theme.PRIMARY};
  font-size: ${({ size }) => (size ?? '1rem')};
  background: ${(props) => props.theme.WHITE};
  transition: filter 200ms;
  border-radius: .625rem;
  padding: .75rem 3rem;
  justify-self: start;
  display: inline;
  cursor: pointer;
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.PRIMARY};
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
