import { AwardsSection } from "./sections/awards/awards";
import { MeSection } from "./sections/me/me";
import { ProjectsSection } from "./sections/project/projects";
import { WhyMeSection } from "./sections/whyMe/whyMe";

export const Home = () => {
  return (
    <div
      className={`
    w-full
    flex 
    flex-col 
    items-center 
    justify-center
    bg-purple-400
    min-h-screen
    `}
    >
      <MeSection />
      <ProjectsSection />
      <AwardsSection />
      <WhyMeSection />
    </div>
  );
};
