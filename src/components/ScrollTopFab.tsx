import { useEffect, useState } from "react";

import styled from "@emotion/styled"

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.PRIMARY};
  background: ${({ theme }) => theme.PRIMARY};
  color: ${({ theme }) => theme.WHITE};
  justify-content: center;
  border-radius: 2rem;
  align-items: center;
  font-size: 1.5rem;
  position: fixed;
  cursor: pointer;
  display: flex;
  bottom: 2rem;
  height: 3rem;
  right: 2rem;
  width: 3rem;
  :hover {
    background: ${({ theme }) => theme.WHITE};
    color: ${({ theme }) => theme.PRIMARY};
  }
`

export default function ScrollTopFab() {
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = () => {
    const scrollY = window.scrollY;
    const visible = scrollY > 100;

    setIsVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }

  return isVisible && (
    <StyledButton onClick={handleClick}>
      &#x25B2;
    </StyledButton>
  )
}