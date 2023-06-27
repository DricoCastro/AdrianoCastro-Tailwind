"use client";
import CertificatesCarousel from "./components/Carousel";

export const AwardsSection = () => {
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
      bg-snow
      lg:pt-20
      lg:pb-24
      pt-14
      pb-20
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
          mb-14
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
          CERTIFICATES
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
          Certificates of Courses Completed Along My Journey as a Developer.
        </a>
      </div>
      <CertificatesCarousel />
    </div>
  );
};
