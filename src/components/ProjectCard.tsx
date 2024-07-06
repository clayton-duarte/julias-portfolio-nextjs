import Image, { StaticImageData } from "next/image";

import { ButtonLink } from "./Button";
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
    <Grid xs={`minmax(auto, ${image.size}) auto`} bg='LIGHT' p="4rem">
      <Image
        src={image.src}
        alt={image.alt}
        priority
      />
      <Grid xs='auto' gap="2rem" p='2rem'>
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
          <ButtonLink size="1.5rem" color="LIGHT">
            Coming Soon
          </ButtonLink>
        )}
      </Grid>
    </Grid>
  )
}