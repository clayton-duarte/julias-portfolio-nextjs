import { ReactNode } from "react";

import Grid from "./Grid";

export default function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <Grid
      container
      xsP="1rem"
      mdP="3rem"
    >
      {children}
    </Grid>
  )
}