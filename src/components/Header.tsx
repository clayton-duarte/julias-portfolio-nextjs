import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useMemo } from 'react'

import styled from '@emotion/styled'

import Grid from './Grid'

const Header = styled(Grid)`
  border-bottom: 2px solid ${props => props.theme.BLACK};
  position: sticky;
  z-index: 999;
  top: 0;
`

const StyledLink = styled(Link) <{ active?: boolean }>`
  font-weight: ${props => props.active ? 700 : 400};
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.theme.PRIMARY};
  }
`

const HomeLink = styled(StyledLink)`
  font-size: 2.5rem;
  &:hover {
    text-decoration: none;
  }
`

const DesktopLink = styled(StyledLink)`
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
    <StyledLink active={isActive} href={href}>{children}</StyledLink>
  )
}

export default function HeaderComponent() {
  return (
    <Header bg='WHITE'>
      <Grid container gap='3rem' p='2rem 3rem' xs='auto auto' justify='space-between' align='center'>
        <HomeLink href='/'>
          &#120129;&#x1D54A;
        </HomeLink>
        <Grid xs='repeat(4, auto)' gap='10rem'>
          <SmartLink href="/work">Work</SmartLink>
          <SmartLink href="/about">About</SmartLink>
          <DesktopLink href="#">LinkedIn</DesktopLink>
          <DesktopLink href="#">Resume</DesktopLink>
        </Grid>
      </Grid>
    </Header>
  )
}