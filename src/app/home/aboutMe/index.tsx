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
          I have always been curious about technology. With my own projects, it
          was a hobby. Until the lockdown came and I rethought my professional
          life and decided to dedicate myself faithfully to the area and become
          a professional developer. I acquired courses and certificates and
          today I am studying Software Engineering at the University of Franca.
          In January 2021 I join Crk technologies, a Belorizontina startup with
          its own projects and outsourced ones, as a junior web developer and
          mobile ( flutter and react ), where I stay one year. I left there to
          enter a new challenge, again a Startup in the field of online ticket
          sales called Fulltickets where I am currently. With extreme curiosity
          and desire to learn more and more, I keep evolving in the area,
          knowing new tools and specializations.
        </a>
      </div>
    </div>
  );
};
