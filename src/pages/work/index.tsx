import highKeyApp from '~/assets/high-key-app.png'
import kijiji from '~/assets/kijiji.png'
import Grid from "~/components/Grid";
import Header from "~/components/Header";
import ProjectCard, { ProjectCardProps } from "~/components/ProjectCard";

const projects: ProjectCardProps[] = [{
  title: "HighKey - Case Study",
  description: "The HighKey app helps users to mix and match outfits while they can check their wearing habits.",
  href: "/work/highkey-app-case-study",
  image: {
    src: highKeyApp,
    alt: "HighKey App",
    size: "315px"
  }
}, {
  title: "Kijiji - Industry Project",
  description: "The HighKey app helps users to mix and match outfits while they check their wearing habits.",
  image: {
    src: kijiji,
    alt: "Kijiji",
    size: "1fr"
  }
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
