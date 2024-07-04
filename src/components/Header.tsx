import styled from '@emotion/styled'

const Header = styled.header`
  /* border-bottom: 1px solid #272424; */
  box-shadow: 0 0 1rem #27242433;
  font-size: 1.5rem;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* max-width: 1280px;
  margin: 0 auto; */
  padding: 3rem;
  gap: 3rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10rem;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
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
        <Home>Logo</Home>
        <Nav>
          <Link href="/work">Work</Link>
          <Link href="#">About</Link>
          <DesktopLink href="#">LinkedIn</DesktopLink>
          <DesktopLink href="#">Resume</DesktopLink>
        </Nav>
      </Container>
    </Header>
  )
}