import React, { Component } from "react";
import Slider from "react-slick";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./StylesArrow.module.css";
import Image from "next/image";
import certificateData from "./data";
import LinkIcon from "@mui/icons-material/Link";

export default function CertificatesCarousel() {
  const certificateCarousel = certificateData.map((certificate, i) => {
    function OnTapCertificateLink() {
      window.open(`${certificate.link}`);
    }
    return (
      <div
        key={i}
        className={`
        m-auto
        p-auto
        h-auto
        `}
      >
        <div
          className={`
          m-auto
          flex
          flex-col
          items-center
          justify-center
          text-center
          py-10
          px-4
          bg-white
          md:mx-6
          mx-2
          gap-y-8
          lg:mb-14
          mb-16
          `}
        >
          <Image width={65} height={0} src={certificate.image} alt="logo" />
          <a
            className={`
          text-lg
          font-semibold
         `}
          >
            {certificate.title}
          </a>
          <a
            className={`
          text-base
          font-normal
         `}
          >
            {`" ${certificate.description} "`}
          </a>

          <a
            onClick={OnTapCertificateLink}
            className={`
            text-base
           font-medium
           flex
           items-center
          cursor-pointer
          hover:underline hover:underline-offset-2 hover:decoration-2	 hover:decoration-royalBlue
           `}
          >
            <LinkIcon className={`origin-center -rotate-45 text-base `} />
            Certificate
          </a>

          <Image
            width={120}
            height={25}
            src={certificate.platformImage}
            alt="logo"
          />
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
      slidesToShow: 3,
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
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            nextArrow: <div />,
            prevArrow: <div />,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            nextArrow: <div />,
            prevArrow: <div />,
          },
        },
      ],
    };
    return (
      <div
        className={`
        flex
        w-full
        h-auto
        m-auto
        flex-col
        `}
      >
        <Slider {...configCarousel}>{certificateCarousel}</Slider>
      </div>
    );
  }

  return (
    <div
      className={`
        mt-10
        w-full
        flex
        h-auto
        items-center
        justify-center
        justify-self-center
        `}
    >
      <Carousel />
    </div>
  );
}
