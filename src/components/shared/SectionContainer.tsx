import { ReactNode } from "react";

import Grid from "./Grid";

export default function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <Grid
      container
      mdP="3rem"
      xsP="1rem"
    >
      {children}
    </Grid>
  )
}