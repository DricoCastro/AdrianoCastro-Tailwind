import React, { Component } from "react";
import Slider from "react-slick";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./StylesArrow.module.css";
import ProjectsData from "./data";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";

export default function ProjectsCarousel() {
  const projectCarousel = ProjectsData.map((project, i) => {
    function OnTapProjectLink() {
      window.open(`${project.link}`);
    }
    return (
      <div
        key={i}
        className={`
        m-auto
        `}
      >
        <div
          className={`
        md:flex-row
        flex
        flex-col
        items-center
        justify-start
        gap-x-8
        mb-10
        `}
        >
          <div
            className={`
        md:w-1/2
        w-[99%]
        h-96
        flex
        items-center
        justify-center
        bg-raven
        rounded-lg
        ml-[2px]
        `}
          >
            <Image width={320} height={250} src={project.image} alt="logo" />
          </div>

          <div
            className={`
        md:w-5/12
        md:mt-0
        mt-8
        w-[99%]
        flex
        flex-col
        items-start
        justify-start
        md:gap-y-16
        gap-y-10
        `}
          >
            <a
              onClick={OnTapProjectLink}
              className={`
           md:text-2xl
           text-xl
           font-semibold
           flex
           items-center
          cursor-pointer
          hover:underline hover:underline-offset-2 hover:decoration-2	 hover:decoration-royalBlue
           `}
            >
              <LinkIcon className={`origin-center -rotate-45 `} />
              {project.name}
            </a>
            <a
              className={`
           md:text-lg
           text-base
           font-normal
           `}
            >
              {project.description}
            </a>
            <div
              className={`
           flex
           flex-row
           items-center
           justify-start
           gap-x-8
           w-full
           `}
            >
              <a
                className={`
              md:text-lg
              text-sm
           font-medium
           `}
              >
                {project.projectLanguage1}
              </a>
              <div className={`w-0.5 h-5	 bg-royalBlue`} />
              <a
                className={`
              md:text-lg
              text-sm
           font-medium
           `}
              >
                {project.projectLanguage2}
              </a>
              <div className={`w-0.5 h-5	 bg-royalBlue`} />
              <a
                className={`
           md:text-lg
           text-sm
           font-medium
           `}
              >
                {project.projectLanguage3}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function PreviousArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function Carousel() {
    const configCarousel = {
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            nextArrow: <div />,
            prevArrow: <div />,
          },
        },
      ],
    };
    return (
      <div
        className={`
        w-full
        h-auto
        m-auto
        flex-col
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
            PROJECTS
          </a>
          <a
            className={`
            tracking-wide
            text-2xl	
           font-semibold
            `}
          >
            Making Ideas Come to Life!
          </a>
        </div>
        <Slider {...configCarousel}>{projectCarousel}</Slider>
      </div>
    );
  }

  return (
    <div
      className={`
        mt-[40px]
        w-full
        flex
        h-auto
        items-center
        justify-center
        `}
    >
      <Carousel />
    </div>
  );
}
