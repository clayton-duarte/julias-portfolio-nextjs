import styled from '@emotion/styled'

import Container from './Container'

const Header = styled.header`
  box-shadow: 0 0 1rem ${props => props.theme.LIGHT};
  font-size: 1.5rem;
`

const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 3rem;
  gap: 3rem;
`

const Nav = styled.nav`
  justify-content: flex-end;
  align-items: center;
  display: flex;
  gap: 10rem;
`

const Link = styled.a`
  text-decoration: none;
  transition: 250ms;
  color: inherit;
  &:hover {
    color: ${props => props.theme.PRIMARY};
  }
`

const Home = styled(Link)`
  font-weight: 700;
`

const DesktopLink = styled(Link)`
@media only screen and (max-width: 1024px) {
  .hiddenMedium {
    display: none;
  }
}
`

export default function HeaderComponent() {
  return (
    <Header>
      <Container>
        <Wrapper>
          <Home href='/'>Logo</Home>
          <Nav>
            <Link href="/work">Work</Link>
            <Link href="#">About</Link>
            <DesktopLink href="#">LinkedIn</DesktopLink>
            <DesktopLink href="#">Resume</DesktopLink>
          </Nav>
        </Wrapper>
      </Container>
    </Header>
  )
}