import { ColorNames } from "~/theme";

import Grid from "./Grid";
import Text from "./Text";

const footerVariants = {
  highKeyApp: {
    color: 'WHITE',
    bg: 'RED',
  },
  kijiji: {
    color: 'WHITE',
    bg: 'PURPLE',
  },
  default: {
    color: 'BLACK',
    bg: 'WHITE',
  },
};

export default function Footer({
  variant = 'default',
}: {
  variant?: keyof typeof footerVariants;
}) {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <Grid color={footerVariants[variant].color as ColorNames} bg={footerVariants[variant].bg as ColorNames}>
        <Text align="center">© {thisYear} Julia Santos. All rights reserved.</Text>
      </Grid>
    </footer>
  );
}