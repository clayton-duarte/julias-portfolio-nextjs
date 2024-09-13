import Grid from '~/components/shared/Grid';
import SectionContainer from '~/components/shared/SectionContainer';
import Text from '~/components/shared/Text';

export default function Overview() {

  return (
    <>
      <SectionContainer>
        <Grid
          gap="64px"
          xs="minmax(auto, 527px)"
        >
          <Text.H4
            color="PURPLE"
          >
            Project Overview
          </Text.H4>
          <Text>
            Our team embarked on a 24-hour industry project with Kijiji to
            {' '}
            <strong>
              support small businesses and local sellers
            </strong>
            {' '}
            on their platform. The main focus was to build trust and credibility
            for these small businesses through a faster and optimized
            verification process, as well as enhanced visibility through
            the verification badges.
          </Text>
        </Grid>
      </SectionContainer>
    </>
  )
}
