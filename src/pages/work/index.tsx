import Grid from '~/components/Grid';
import Header from '~/components/Header';
import HightKeySection from '~/components/homeSection/HightKeySection';
import KijijiSection from '~/components/homeSection/KijijiSection';

export default function WorkPage() {
  return (
    <Grid gap="0">
      <Header />
      <HightKeySection />
      <KijijiSection />
    </Grid>
  );
}
