import Grid from "~/components/Grid";
import Header from "~/components/Header";
import ProjectCard, { ProjectCardProps } from "~/components/ProjectCard";

const projects: ProjectCardProps[] = [{
  title: "HighKey - Case Study",
  description: "The HighKey app helps users to mix and match outfits while they can check their wearing habits.",
  href: "/work/highkey-app-case-study"
}, {
  title: "Kijiji - Industry Project",
  description: "The HighKey app helps users to mix and match outfits while they check their wearing habits.",
}]

export default function WorkPage() {
  return (
    <>
      <Header />
      <Grid container p='3rem' gap='10rem'>
        {projects.map((cardProps, index) =>
          <ProjectCard
            key={`project-card-${index}`}
            {...cardProps}
          />
        )}
      </Grid>
    </>
  )
}
