import Header from '~/components/Header';
import AffinityMapping from '~/components/highKeySections/AffinityMapping';
import Banner from '~/components/highKeySections/Banner';
import DesignProcess from '~/components/highKeySections/DesignProcess';
import ExperienceMapping from '~/components/highKeySections/ExperienceMapping';
import HowMightWe from '~/components/highKeySections/HowMightWe';
import InterviewScript from '~/components/highKeySections/InterviewScript';
import MoodboardBranding from '~/components/highKeySections/MoodboardBranding';
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
import ScrollTopFab from '~/components/ScrollTopFab';

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

      <AffinityMapping />
      <WhatPeopleSay />
      <Persona />
      <HowMightWe />
      <ExperienceMapping />
      <UserStories />
      <TaskFlow />
      <MoodboardBranding />
      <SketchesWireframes />
      <NextStepsLearnings />
      <TarotCards />
      <ScrollTopFab />
    </>
  );
}
