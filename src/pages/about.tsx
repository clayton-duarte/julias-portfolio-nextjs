import Image from 'next/image';

import about from '~/components/shared/assets/about.png';
import Footer from '~/components/shared/Footer';
import Grid from '~/components/shared/Grid';
import Header from '~/components/shared/Header';
import Text from '~/components/shared/Text';

export default function AboutPage() {
  return (
    <>
      <Header />
      <Grid
        container
        height="calc(100vh - 200px)"
        p="3rem"
      >
        <Grid
          align="center"
          gap="3rem"
          xl="minmax(auto, 550px) 1fr"
        >
          <Image
            priority
            alt="Julia Santos"
            src={about}
          />
          <Grid
            gap="2rem"
          >
            <Text.H3>
              UX Designer, Research enthusiast & Graphic Designer
            </Text.H3>
            <Text.H5
              bold={false}
            >
              Hello, I’m Julia, a UX Designer and research enthusiast with a
              solid foundation in graphic design, digital marketing, and sales.
            </Text.H5>
            <Text.H5
              bold={false}
            >
              Originally from Brazil, I’ve been living in Canada since 2019. In
              my spare time, you can find me playing board games with friends,
              riding my bicycle, enjoying museums, or just shooting the breeze
              about this, that, and the other thing.
            </Text.H5>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
