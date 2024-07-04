import styled from "@emotion/styled";

import Container from "@/components/Container";
import Header from "@/components/Header";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";

const Content = styled.div`
  flex-direction: column;
  padding: 7rem 2.4rem;
  display: flex;
  gap: 192px;
`

const projects: ProjectCardProps[] = [{
  title: "Case Study - HighKey app",
  description: "The HighKey app helps users to mix and match outfits while they can check their wearing habits.",
  cta: "View project"
}, {
  title: "Kijiji - Industry Project",
  description: "The HighKey app helps users to mix and match outfits while they check their wearing habits.",
  cta: "View project"
}, {
  title: "Case Study - HighKey app",
  description: "The HighKey app helps users to mix and match outfits while they can check their wearing habits.",
  cta: "View project"
}]

export default function WorkPage() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          {projects.map((cardProps, index) =>
            <ProjectCard
              key={`project-card-${index}`}
              {...cardProps}
            />
          )}
        </Content>
      </Container>
    </>
  )
}
