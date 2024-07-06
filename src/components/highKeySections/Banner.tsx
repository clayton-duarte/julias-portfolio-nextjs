import Image from "next/image";

import { ButtonLink } from "../Button";
import Grid from "../Grid";
import Text from "../Text";

export default function BannerSection() {
  return (
    <Grid container p='3rem 0'>
      <Grid xs='auto 1fr' gap='2rem' p='4rem 0'>
        <Image
          src="/high-key-banner.png"
          alt="high-key-app"
          width={620}
          height={610}
          priority
        />
        <Grid gap="2rem" xs='auto'>
          <Text.H1 color='PRIMARY'>HighKey - Case Study</Text.H1>
          <Text.H4 m="0 0 2rem 0" bold={false}>The HighKey app helps users to mix and match outfits while they can check their wearing habits.</Text.H4>
          <ButtonLink target="__blank" size="2rem" href="https://www.figma.com/design/KXwEXl2lgDMzls0IY8lJtf/Untitled?node-id=858-1778&t=poJffXj5jTzHQe5N-1">
            View prototype
          </ButtonLink>
        </Grid>
      </Grid>
    </Grid>
  )
}