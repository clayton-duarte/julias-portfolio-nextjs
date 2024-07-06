import Header from "~/components/Header";
import AffinityMapping from "~/components/highKeySections/AffinityMapping";
import Banner from "~/components/highKeySections/Banner";
import DesignProcess from "~/components/highKeySections/DesignProcess";
import ExperienceMapping from "~/components/highKeySections/ExperienceMapping";
import HowMightWe from "~/components/highKeySections/HowMightWe";
import InterviewScript from "~/components/highKeySections/InterviewScript";
import MoodboardBranding from "~/components/highKeySections/MoodboardBranding";
import NextStepsLearnings from "~/components/highKeySections/NextStepsLearnings";
import Persona from "~/components/highKeySections/Persona";
import ProblemSpace from "~/components/highKeySections/ProblemSpace";
import SecondaryResearch from "~/components/highKeySections/SecondaryResearch";
import SketchesWireframes from "~/components/highKeySections/SketchesWireframes";
import Summary from "~/components/highKeySections/Summary";
import TarotCards from "~/components/highKeySections/TarotCards";
import TaskFlow from "~/components/highKeySections/TaskFlow";
import ThemesSection from "~/components/highKeySections/ThemesSection";
import UserStories from "~/components/highKeySections/UserStories";
import WhatPeopleSay from "~/components/highKeySections/WhatPeopleSay";
import ScrollTopFab from "~/components/ScrollTopFab";

export default function HighkeyAppCaseStudyPage() {
  return (
    <>
      <Header />
      <Banner />
      <Summary />
      <ProblemSpace /> {/* 1 <<<<<<< */}
      <DesignProcess /> {/* 1 <<<<<<< */}
      <SecondaryResearch /> {/* 1 <<<<<<< */}
      <InterviewScript /> {/* 3 */}
      <AffinityMapping /> {/* 3 */}
      <ThemesSection /> {/* 3 <<<<<<< */}
      <WhatPeopleSay /> {/* 3 */}
      <Persona /> {/* 4 <<<<<<< */}
      <HowMightWe /> {/* 6 <<<<<<< */}
      <ExperienceMapping /> {/* 5 <<<<<<< */}
      <UserStories /> {/* 7-8 */}
      <TaskFlow /> {/* 9 <<<<<<< */}
      <MoodboardBranding /> {/* 14 */}
      <SketchesWireframes /> {/* 11 */}
      <NextStepsLearnings /> {/* 18 */}
      <TarotCards /> {/* 17 */}
      <ScrollTopFab />
    </>
  )
}

