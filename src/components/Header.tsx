import { useRouter } from 'next/router'
import { ReactNode, useMemo } from 'react'

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

const Link = styled.a<{ active?: boolean }>`
  font-weight: ${props => props.active ? 700 : 400};
  text-decoration: none;
  transition: 250ms;
  color: inherit;
  &:hover {
    color: ${props => props.theme.PRIMARY};
  }
`

const DesktopLink = styled(Link)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

function SmartLink({ children, href }: { children: ReactNode, href: string }) {
  const router = useRouter();

  const isActive = useMemo(() => {
    if (href === '/' && router.pathname !== '/') return false;

    if (router.pathname.startsWith(href)) return true;

    return false;
  }, [href, router.pathname])

  return (
    <Link active={isActive} href={href}>{children}</Link>
  )
}

export default function HeaderComponent() {
  return (
    <Header>
      <Container>
        <Wrapper>
          <SmartLink href='/'>Home</SmartLink>
          <Nav>
            <SmartLink href="/work">Work</SmartLink>
            <SmartLink href="/about">About</SmartLink>
            <DesktopLink href="#">LinkedIn</DesktopLink>
            <DesktopLink href="#">Resume</DesktopLink>
          </Nav>
        </Wrapper>
      </Container>
    </Header>
  )
}