import HightKeySection from '~/components/homeSections/HightKeySection';
import KijijiSection from '~/components/homeSections/KijijiSection';
import Footer from '~/components/shared/Footer';
import Grid from '~/components/shared/Grid';
import Header from '~/components/shared/Header';

export default function WorkPage() {
  return (
    <Grid
      gap="0"
    >
      <Header />
      <HightKeySection />
      <KijijiSection />
      <Footer />
    </Grid>
  );
}
