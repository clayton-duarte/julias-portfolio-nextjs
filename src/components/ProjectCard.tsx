import Image, { StaticImageData } from "next/image";

import Button, { ButtonLink } from "./Button";
import Grid from "./Grid";
import Text from "./Text";

export interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  image: {
    src: StaticImageData;
    alt: string;
    size: string;
  }
}

export default function ProjectCard({
  description,
  title,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Grid
      lg={`minmax(40%, ${image.size}) auto`}
      xl={`minmax(auto, ${image.size}) auto`}
      align="center"
      bg='LIGHT'
      xsP="3rem"
      mdP="4rem"
      gap="3rem"
    >
      <Image
        src={image.src}
        alt={image.alt}
        priority
      />
      <Grid xs='auto' gap="2rem" mdP='2rem'>
        <Text.H3>{title}</Text.H3>
        <Grid xs='minmax(auto, 360px)'>
          <Text.H5 bold={false} m='0 0 3rem 0'>
            {description}
          </Text.H5>
        </Grid>
        {href ? (
          <ButtonLink size="1.5rem" href={href} color="BLACK">
            View project
          </ButtonLink>
        ) : (
          <Button disabled size="1.5rem" color="LIGHT">
            Coming Soon
          </Button>
        )}
      </Grid>
    </Grid>
  )
}