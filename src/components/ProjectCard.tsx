import Image from "next/image";

import highKeyApp from '~/assets/high-key-app.png'

import { ButtonLink } from "./Button";
import Grid from "./Grid";
import Text from "./Text";

export interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
}

export default function ProjectCard({
  description,
  title,
  href
}: ProjectCardProps) {
  return (
    <Grid xs='auto auto' bg='LIGHT' p="4rem">
      <Image
        src={highKeyApp}
        alt="high-key-app"
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
            Comming Soon
          </ButtonLink>
        )}
      </Grid>
    </Grid>
  )
}