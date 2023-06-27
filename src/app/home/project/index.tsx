"use client";
import ProjectsCarousel from "./components/Carousel";

export const ProjectsSection = () => {
  return (
    <div
      className={`
      w-full
      lg:px-48
      px-[15px]
      flex
      flex-col
      items-center
      justify-center
      pt-8
      pb-14
    `}
    >
      <ProjectsCarousel />
    </div>
  );
};
