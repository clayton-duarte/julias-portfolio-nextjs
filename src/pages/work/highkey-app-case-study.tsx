import Header from "~/components/Header";
import AffinityMapping from "~/components/highKeySections/AffinityMapping";
import Banner from "~/components/highKeySections/Banner";
import DesignProcess from "~/components/highKeySections/DesignProcess";
import ExperienceMapping from "~/components/highKeySections/ExperienceMapping";
import HowMightWe from "~/components/highKeySections/HowMightWe";
import InterviewScript from "~/components/highKeySections/InterviewScript";
import Persona from "~/components/highKeySections/Persona";
import ProblemSpace from "~/components/highKeySections/ProblemSpace";
import SecondaryResearch from "~/components/highKeySections/SecondaryResearch";
import Summary from "~/components/highKeySections/Summary";
import TaskFlow from "~/components/highKeySections/TaskFlow";
import ThemesSection from "~/components/highKeySections/ThemesSection";
import UserStories from "~/components/highKeySections/UserStories";
import WhatPeopleSay from "~/components/highKeySections/WhatPeopleSay";

export default function HighkeyAppCaseStudyPage() {
  return (
    <>
      <Header />
      <Banner />
      <Summary />
      <ProblemSpace />
      <DesignProcess />
      <SecondaryResearch />
      <InterviewScript />
      <AffinityMapping />
      <ThemesSection />
      <WhatPeopleSay />
      <Persona />
      <HowMightWe />
      <ExperienceMapping />
      <UserStories />
      <TaskFlow />
      <p>UI Inspo</p>
      <p>Sketches</p>
      <p>Wireframes</p>
    </>
  )
}

