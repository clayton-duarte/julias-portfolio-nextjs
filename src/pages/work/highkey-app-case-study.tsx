import AffinityMapping from '~/components/highKeySections/AffinityMapping';
import Banner from '~/components/highKeySections/Banner';
import Branding from '~/components/highKeySections/Branding';
import DesignProcess from '~/components/highKeySections/DesignProcess';
import ExperienceMapping from '~/components/highKeySections/ExperienceMapping';
import HowMightWe from '~/components/highKeySections/HowMightWe';
import Ideation from '~/components/highKeySections/Ideation';
import InterviewScript from '~/components/highKeySections/InterviewScript';
import NextStepsLearnings from '~/components/highKeySections/NextStepsLearnings';
import Persona from '~/components/highKeySections/Persona';
import ProjectOverview from '~/components/highKeySections/ProjectOverview';
import SecondaryResearch from '~/components/highKeySections/SecondaryResearch';
import SketchesWireframes from '~/components/highKeySections/SketchesWireframes';
import Summary from '~/components/highKeySections/Summary';
import TarotCards from '~/components/highKeySections/TarotCards';
import TaskFlow from '~/components/highKeySections/TaskFlow';
import ThemesSection from '~/components/highKeySections/ThemesSection';
import UserStories from '~/components/highKeySections/UserStories';
import WhatPeopleSay from '~/components/highKeySections/WhatPeopleSay';
import WhyGenZ from '~/components/highKeySections/WhyGenZ';
import Header from '~/components/shared/Header';
import ScrollTopFab from '~/components/shared/ScrollTopFab';

export default function HighkeyAppCaseStudyPage() {
  return (
    <>
      <Header />
      <Banner />
      <Summary />
      <ProjectOverview />
      <DesignProcess />
      <WhyGenZ />
      <SecondaryResearch />
      <InterviewScript />
      <ThemesSection />
      <HowMightWe />
      <Persona />
      <ExperienceMapping />
      <Ideation />
      <TaskFlow />
      <Branding />

      {/* <UserStories /> */}
      {/* <AffinityMapping /> */}
      {/* <WhatPeopleSay /> */}
      <SketchesWireframes />
      <NextStepsLearnings />
      {/* <TarotCards /> */}
      <ScrollTopFab />
    </>
  );
}
