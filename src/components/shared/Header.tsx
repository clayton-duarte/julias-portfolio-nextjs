import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useMemo, useState } from 'react';

import styled from '@emotion/styled';

import { Breakpoints } from '~/theme';

import menuClosed from './assets/menu-closed.svg';
import menu from './assets/menu.svg';
import Grid from './Grid';

export const HEADER_HEIGHT = '77px';

const Header = styled(Grid)`
  border-bottom: 2px solid
    ${(props) => {
    return props.theme.BLACK;
  }};
  position: sticky;
  z-index: 999;
  top: 0;
`;

const StyledLink = styled(Link) <{ active?: boolean }>`
  font-weight: ${(props) => {
    return props.active ? 700 : 400;
  }};
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  &:hover {
    color: ${(props) => {
    return props.theme.RED;
  }};
  }
`;

const HomeLink = styled(StyledLink)`
  font-size: 2rem;

  &:hover {
    text-decoration: none;
  }
`;

const DesktopOnly = styled(Grid)`
  @media (max-width: ${Breakpoints.MD}) {
    display: none;
  }
`;

const MobileOnly = styled(Grid)`
  @media (min-width: calc(${Breakpoints.MD} + 1px)) {
    display: none;
  }
`;

const ButtonIcon = styled.button`
  all: unset;
  cursor: pointer;
`;

const Overlay = styled.div`
  top: ${HEADER_HEIGHT};
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
`;

const MobileMenu = styled(Grid)`
  background: ${(props) => {
    return props.theme.WHITE;
  }};
  top: ${HEADER_HEIGHT};
  position: fixed;
  height: 100%;
  right: 0;
`;

function SmartLink({
  children,
  href,
  target,
}: {
  children: ReactNode;
  href: string;
  target?: '_blank';
}) {
  const router = useRouter();

  const isActive = useMemo(() => {
    if (href === '/' && router.pathname !== '/') return false;

    if (router.pathname.startsWith(href)) return true;

    return false;
  }, [href, router.pathname]);

  return (
    <StyledLink
      active={isActive}
      href={href}
      target={target}
    >
      {children}
    </StyledLink>
  );
}

export default function HeaderComponent() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Header
      bg="WHITE"
    >
      <Grid
        container
        align="center"
        justify="space-between"
        mdGap="0 2rem"
        p="1rem 3rem"
        xs="auto auto"
        xsGap="0 1rem"
      >
        <HomeLink
          href="/"
        >
          &#120129;&#x1D54A;
        </HomeLink>
        <DesktopOnly
          mdGap="10rem"
          xs="repeat(4, auto)"
        >
          <SmartLink
            href="/work"
          >
            Work
          </SmartLink>
          <SmartLink
            href="/about"
          >
            About
          </SmartLink>
          <SmartLink
            href="https://www.linkedin.com/in/ssantosjulia/"
            target="_blank"
          >
            LinkedIn
          </SmartLink>
          <SmartLink
            href="/julia-santos-ux-designer-resume.pdf"
            target="_blank"
          >
            Resume
          </SmartLink>
        </DesktopOnly>
        <MobileOnly>
          <ButtonIcon
            onClick={handleClick}
          >
            <Image
              priority
              alt="Menu"
              src={open ? menuClosed : menu}
            />
          </ButtonIcon>
        </MobileOnly>
        {open && (
          <MobileOnly>
            <Overlay
              onClick={handleClick}
            >
              <MobileMenu>
                <Grid
                  align="start"
                  gap="3rem"
                  p="3rem"
                >
                  <SmartLink
                    href="/work"
                  >
                    Work
                  </SmartLink>
                  <SmartLink
                    href="/about"
                  >
                    About
                  </SmartLink>
                  <SmartLink
                    href="https://www.linkedin.com/in/ssantosjulia/"
                    target="_blank"
                  >
                    LinkedIn
                  </SmartLink>
                  <SmartLink
                    href="/julia-santos-ux-designer-resume.pdf"
                    target="_blank"
                  >
                    Resume
                  </SmartLink>
                </Grid>
              </MobileMenu>
            </Overlay>
          </MobileOnly>
        )}
      </Grid>
    </Header>
  );
}
