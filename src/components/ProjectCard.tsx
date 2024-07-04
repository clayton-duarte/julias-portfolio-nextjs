import Image from "next/image";

import styled from "@emotion/styled"

const Card = styled.div`
  background: ${props => props.theme.LIGHT};
  /* color: ${props => props.theme.WHITE}; */
  border-radius: 40px;
  padding: 92px;
  display: flex;
  gap: 80px;
`

const Content = styled.div`
  flex-direction: column;
  align-items: start;
  display: flex;
  gap: 2rem;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  margin: 0;
`

const Description = styled.p`
  font-size: 32px;
  margin: 0;
`

const Button = styled.a`
  /* border: 1px solid ${props => props.theme.WHITE}; */
  background: ${props => props.theme.WHITE};
  color: ${props => props.theme.BLACK};
  transition: 250ms linear;
  /* background: transparent; */
  text-decoration: none;
  align-items: center;
  border-radius: 10px;
  padding: 16px 48px;
  margin-top: 4rem;
  font-weight: 700;
  font-size: 32px;
  &:hover {
    /* border: 1px solid ${props => props.theme.PRIMARY}; */
    background: ${props => props.theme.WHITE};
    color: ${props => props.theme.PRIMARY};
  }
`

export interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  href = "#"
}: ProjectCardProps) {
  return (
    <Card>
      <Image
        src="/high-key-app.png"
        alt="high-key-app"
        width={338}
        height={688}
        priority
      />
      <Content>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
        <Button href={href}>
          View project
        </Button>
      </Content>
    </Card>
  )
}