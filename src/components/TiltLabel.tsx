import { ReactNode } from "react";

import styled from "@emotion/styled";

const Wrapper = styled.div`
background: black;
align-self: start;
padding: .25rem 1rem;
transform: rotateZ(-5deg);
`

const Text = styled.div`
transform: rotate(5deg);
font-size: 1.5rem;
font-weight: 700;
color: white;
`

export default function TiltLabel({ children }: { children: ReactNode }) {
  return <Wrapper><Text>{children}</Text></Wrapper>
}
