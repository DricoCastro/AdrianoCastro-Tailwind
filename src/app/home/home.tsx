import { AwardsSection } from "./awards";
import { MeSection } from "./me";
import { ProjectsSection } from "./project";
import { WhyMeSection } from "./whyMe";

export const Home = () => {
  return (
    <div
      className={`
    w-full
    flex 
    flex-col 
    items-center 
    justify-between
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
