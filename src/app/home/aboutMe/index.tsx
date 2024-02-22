"use client";
export const AboutMeSection = () => {
  return (
    <div
      id="aboutMe-section"
      className={`
      w-full
      lg:px-48
      px-[15px]
      flex
      flex-col
      items-center
      justify-center
      bg-white
      py-20
    `}
    >
      <div
        className={`
          w-full
          flex
          flex-col
          items-center
          justify-center
          gap-y-14
          `}
      >
        <a
          className={`
            text-lg
           font-semibold
           tracking-widest
           underline 
          decoration-royalBlue
           decoration-2
            `}
        >
          ABOUT ME
        </a>
        <a
          className={`
            tracking-wide
            text-2xl	
           font-semibold
           w-full
           text-center
            `}
        >
          A Little Bit of My Trajectory Until I Became a Developer
        </a>

        <a
          className={`
            text-lg	
           font-normal
           w-full
           text-justify
           md:leading-loose	
           leading-normal	
            `}
        >
          With an unwavering passion for technology, my journey as a software
          developer began as a hobby, exploring personal projects. However, it
          was during the lockdown that I reassessed my professional trajectory
          and decided to fully dedicate myself to the field, becoming a
          professional developer. With solid experience in JavaScript and
          Next.js, coupled with expertise in Firebase as a database, I have
          forged my path in web development. Currently, I am immersed in my
          studies of Software Engineering at the University of Franca,
          strengthening my theoretical and practical foundation. I also
          highlight the system that I conceived and developed, currently in use
          by the Ministry of Culture of the State of Minas Gerais (SECULT). This
          achievement not only demonstrates my technical prowess but also my
          ability to translate complex requirements into functional and
          effective solutions. My most recent experience as a developer at
          SmartHow, a company specialized in digitizing industrial production
          processes using artificial intelligence, was extremely enriching.
          There, I had the opportunity to apply my software development skills
          in a highly innovative context, contributing to the optimization and
          automation of industrial processes through artificial intelligence.
          Previously, I was part of the team at Fulltickets, a startup focused
          on online ticket sales, where I also actively contributed to the
          development of innovative solutions. Currently, I maintain my
          intellectual curiosity and constant desire for learning, always
          seeking new tools and specializations to enhance my practice and
          expand my professional horizons. My journey as a developer is marked
          by a relentless pursuit of excellence and innovation, with a
          continuous commitment to making significant contributions to
          challenging and impactful projects.
        </a>
      </div>
    </div>
  );
};
