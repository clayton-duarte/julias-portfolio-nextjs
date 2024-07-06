import Header from "~/components/Header";
import AffinityMapping from "~/components/highKeySections/AffinityMapping";
import Banner from "~/components/highKeySections/Banner";
import DesignProcess from "~/components/highKeySections/DesignProcess";
import ExperienceMapping from "~/components/highKeySections/ExperienceMapping";
import HowMightWe from "~/components/highKeySections/HowMightWe";
import InterviewScript from "~/components/highKeySections/InterviewScript";
import MoodboardBranding from "~/components/highKeySections/MoodboardBranding";
import Persona from "~/components/highKeySections/Persona";
import ProblemSpace from "~/components/highKeySections/ProblemSpace";
import SecondaryResearch from "~/components/highKeySections/SecondaryResearch";
import SketchesWireframes from "~/components/highKeySections/SketchesWireframes";
import Summary from "~/components/highKeySections/Summary";
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
      <p>Hypothesis and Assumptions</p> {/* 2 */}
      <p>UI Inspo</p> {/* 10 */}
      <p>User Testing and Results</p> {/* 12 <<<<<<< */}
      <p>Before and After</p> {/* 13 <<<<<<< */}
      <p>UI Library and Design System</p> {/* 15 <<<<<<< */}
      <p>High Fidelity Design and Prototype</p> {/* 16 <<<<<<< */}
      <p>Tarot Cards</p> {/* 17 <<<<<<< */}
      <p>Key Learnings and Next Steps</p> {/* 18 <<<<<<< */}
      <ScrollTopFab />
    </>
  )
}

