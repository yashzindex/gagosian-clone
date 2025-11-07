"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/image/banner1.jpg";
import img2 from "@/public/image/banner2.jpg";
import img3 from "@/public/image/banner3.jpg";
import img4 from "@/public/image/banner4.jpg";

// 🔹 Slide data array
const slides = [
  {
    img: img1,
    opening: "Opening November 6",
    artist: "Richard Prince",
    title: "Folk Songs",
    location: "555 West 24th Street, New York",
    link: "/",
  },
  {
    img: img2,
    opening: "On View Now",
    artist: "Damien Hirst",
    title: "Spot Paintings",
    location: "Grosvenor Hill, London",
    link: "/",
  },
  {
    img: img3,
    opening: "Opening December 12",
    artist: "Jenny Saville",
    title: "Drawings",
    location: "Beverly Hills, Los Angeles",
    link: "/",
  },
  {
    img: img4,
    opening: "Upcoming",
    artist: "Takashi Murakami",
    title: "Superflat Universe",
    location: "Hong Kong",
    link: "/",
  },
];

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 4000; // autoplay delay (4 seconds)

  useEffect(() => {
    setProgress(0);
    const stepTime = 50;
    const increment = 100 / (duration / stepTime);

    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + increment : 100));
    }, stepTime);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[calc(100dvh-36px)] lg:h-[calc(100dvh-73px)] xl:h-[calc(100vh-36px)] overflow-hidden banner-slider">
    {/* <div className="relative w-full md:h-[calc(100dvh-36px)] overflow-hidden banner-slider"> */}
      <div className="absolute left-0 top-0 z-10 p-4 md:p-8 md:py-6 lg:p-8 xl:pl-8 xl:pt-8">
        <Link href="/" className="font-headline font-bold text-white text-[50px] xl:text-[60px] leading-80 uppercase">
          <h1>Gagosian</h1>
        </Link>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: duration, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="h-full w-full cursor-grab relative !flex shrink-0 basis-full items-center overflow-hidden"
          >
            {/* Text Overlay */}
            <div className="relative z-10 mx-auto w-auto flex justify-center text-center px-4">
              <div className="mx-auto max-w-[820px] h-full ">
                <Link href={slide.link} className="group">
                  <div className="group max-w-full space-y-5">
                    <p className="text-white font-gtAmericaRg text-15 md:text-lg tracking-[-0.126px] wordS36 leading-80">
                      {slide.opening}
                    </p>
                    <div className="font-headline  text-white text-75 lg:text-100 leading-90 tracking-tight">
                      {slide.artist}
                    </div>
                    {slide.title && (
                      <div className="text-white font-minionNormal font-bold text-35 leading-80 tracking-[-0.525px]">
                        {slide.title}
                      </div>
                    )}
                    <div className="text-white font-gtAmericaRg text-15 md:text-lg tracking-[-0.126px] wordS36 leading-80">
                      <p>{slide.location}</p>
                    </div>

                    <button
                      className="inline-flex items-center whitespace-nowrap border-solid transition-colors h-10 min-w-10 px-[13px] py-2 
                        has-hover:type-america-md has-hover:h-8.5 has-hover:min-w-8.5 has-hover:px-2 
                         mt-6 md:mt-8 text-black bg-white border border-transparent group-hover:border-white group-hover:text-white group-hover:bg-black"
                    >
                      Learn More
                    </button>
                  </div>
                </Link>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.img}
                alt={`${slide.artist} - ${slide.title}`}
                priority={i === 0}
                className="object-cover w-full h-full"
                sizes="100vw"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom segmented progress bar */}
      <div className="absolute bottom-5 left-0 w-full h-[3px] flex gap-1 z-50">
        {slides.map((_, index) => (
          <div
            key={index}
            className="flex-1 relative overflow-hidden rounded-full bg-white/20"
          >
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-linear"
              style={{
                width:
                  index < activeIndex
                    ? "100%"
                    : index === activeIndex
                    ? `${progress}%`
                    : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
