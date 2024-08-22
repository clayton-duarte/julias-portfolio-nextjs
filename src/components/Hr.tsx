import styled from '@emotion/styled';

export default styled.hr`
  border: unset; // Reset the default border, keep on top
  border-bottom: 2px solid
    ${({ theme }) => {
      return theme.BLACK;
    }};
  width: 100%;
  margin: 0;
`;
