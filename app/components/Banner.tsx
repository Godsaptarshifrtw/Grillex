"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const banner_info = [
  {
    zindex: 5,
    back_img: "/banner5.webp",
    heading1: "METAL PARTITION",
    heading2: "MANUFACTURER",
    subtitle: "IN KOLKATA",
  },
  {
    zindex: 4,
    back_img: "/banner4.webp",
    heading1: "METAL RAILING",
    heading2: "MANUFACTURER",
    subtitle: "IN KOLKATA",
  },
  {
    zindex: 3,
    back_img: "/banner1.webp",
    heading1: "INVISIBLE GRILL",
    heading2: "MANUFACTURER",
    subtitle: "IN KOLKATA",
  },
  {
    zindex: 2,
    back_img: "/banner2.webp",
    heading1: "METAL FURNITURE",
    heading2: "MANUFACTURER",
    subtitle: "IN KOLKATA",
  },
  {
    zindex: 1,
    back_img: "/banner3.webp",
    heading1: "PVD COATED GRILL",
    heading2: "MANUFACTURER",
    subtitle: "IN KOLKATA",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const delay = 1000;

  const goNext = () => {
    setCurrent((preState) => {
      if (preState === banner_info.length - 1) return 0;
      return preState + 1;
    });
  };

  const goPrev = () => {
    setCurrent((preIndex) => {
      const nextIndex = preIndex - 1;
      if (nextIndex < 0) return banner_info.length - 1;
      return nextIndex;
    });
  };

  const bannerController = (currentIndex: number) => {
    setCurrent(currentIndex);
  };

  useEffect(() => {
    const interverid = setInterval(() => {
      goNext();
    }, 6700);

    return () => clearInterval(interverid);
  }, [bannerController]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Define a minimum distance for a valid swipe

    if (distance > minSwipeDistance) {
      //swipe left
      goNext();
    } else if (distance < -minSwipeDistance) {
      //swipe right
      goPrev();
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <div className="h-full ts:pt-32 md:pt-14">
        {/* <div className="w-full h-1 bg-[#D83046]"></div> */}
        <div className="h-[500px] ts:h-[1000px] overflow-hidden relative">
          {banner_info.map((item, index) => (
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              key={index}
              style={{ zIndex: item.zindex }}
              className={`absolute ts:h-[440px] ${
                index !== current ? "opacity-0" : "opacity-100"
              } transition-all duration-700 w-full rounded-tr-[80px] overflow-hidden`}
            >
              <Image
                className="ts:min-h-[440px] w-full object-cover ts:object-cover md:min-h-[440px]"
                src={item.back_img}
                sizes="(max-width: 639px) 100vw, 100vw"
                alt="Slider 1"
                height={3840}
                width={3840}
              />
              <div className="absolute top-0 px-20 ts:px-5 group/demo bottom-0 right-0 left-0 bg-[#0000006b] flex justify-center flex-col gap-8">
                <div
                  style={{ transitionDelay: `${delay}ms` }}
                  className={`h-[1px] bg-white ${
                    current !== index ? "w-0" : "w-28 md:w-10"
                  } transition-all duration-700`}
                ></div>
                <h2 className="text-5xl text-white font-bold tracking-widest leading-[3.6rem] ts:text-3xl">
                  <span
                    style={{ transitionDelay: `${delay}ms` }}
                    className={`block ${
                      current !== index
                        ? "-translate-x-20 opacity-0"
                        : "translate-x-0 opacity-100"
                    } transition-all duration-500 ease-out`}
                  >
                    {item.heading1}
                  </span>
                  <span
                    style={{ transitionDelay: `${delay}ms` }}
                    className={`block ${
                      current !== index
                        ? "translate-x-20 opacity-0"
                        : "translate-y-0 opacity-100"
                    } transition-all duration-[1500ms] ease-out`}
                  >
                    {item.heading2}
                  </span>
                </h2>
                <p
                  style={{ transitionDelay: `${delay}ms` }}
                  className={`font-semibold ts:text-xs text-[#FFB426] tracking-widest ${
                    index !== current
                      ? "translate-y-14 opacity-0"
                      : "translate-y-0 opacity-100"
                  } transition-all duration-[1500ms]`}
                >
                  {item.subtitle}
                </p>
                <Link className="block" href={"/contact-us"}>
                  <button
                    style={{ transitionDelay: `${delay}ms` }}
                    className={`bg-[#EF5A6F] max-w-fit relative text-white p-5 pb-6 px-8 ts:p-3 ts:pb-4 ts:px-6 font-semibold tracking-[0.4em] ${
                      index !== current
                        ? "translate-y-10 opacity-0"
                        : "translate-y-0 opacity-100"
                    } transition-all duration-[1500ms]`}
                  >
                    CONTACT US
                    <div className="w-full h-[0.3rem] bg-[#d83046] absolute bottom-0 left-0 right-0"></div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-60 ts:hidden absolute flex flex-col mt-10 gap-4 justify-center items-end top-0 bottom-0 right-0">
        {banner_info.map((item, index) => (
          <button
            key={item.heading1}
            onClick={() => bannerController(index)}
            className="h-5 flex-center group/bannerline"
          >
            <div
              className={`h-[2px] ${
                index === current ? "w-16" : "w-10"
              } bg-[#EF5A6F] group-hover/bannerline:bg-yellow-600 transition-all duration-500`}
            ></div>
          </button>
        ))}
      </div>
    </>
  );
}
