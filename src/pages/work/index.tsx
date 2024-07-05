import styled from "@emotion/styled";

import Grid from "~/components/Grid";
import Header from "~/components/Header";
import ProjectCard, { ProjectCardProps } from "~/components/ProjectCard";

const Content = styled.div`
  flex-direction: column;
  padding: 7rem 2.4rem;
  display: flex;
  gap: 192px;
`

const projects: ProjectCardProps[] = [{
  title: "HighKey - Case Study",
  description: "The HighKey app helps users to mix and match outfits while they can check their wearing habits.",
  href: "/work/highkey-app-case-study"
}, {
  title: "Kijiji - Industry Project",
  description: "The HighKey app helps users to mix and match outfits while they check their wearing habits.",
  href: "/work/kijiji-industry-project"
}, {
  title: "Case Study - HighKey app",
  description: "The HighKey app helps users to mix and match outfits while they can check their wearing habits.",
  href: "/work/highkey-app-case-study"
}]

export default function WorkPage() {
  return (
    <>
      <Header />
      <Grid container p='3rem 0'>
        <Content>
          {projects.map((cardProps, index) =>
            <ProjectCard
              key={`project-card-${index}`}
              {...cardProps}
            />
          )}
        </Content>
      </Grid>
    </>
  )
}
