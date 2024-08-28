import Grid from '~/components/shared/Grid';
import Header from '~/components/shared/Header';
import HightKeySection from '~/components/homeSections/HightKeySection';
import KijijiSection from '~/components/homeSections/KijijiSection';

export default function WorkPage() {
  return (
    <Grid gap="0">
      <Header />
      <HightKeySection />
      <KijijiSection />
    </Grid>
  );
}
