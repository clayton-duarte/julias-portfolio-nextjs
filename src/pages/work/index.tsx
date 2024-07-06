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
  description: "Kijiji is a platform that allows users to buy and sell items locally. I worked on a solution to help small businesses strive in the platform.",
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
