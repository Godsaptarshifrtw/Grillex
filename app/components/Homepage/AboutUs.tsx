"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoIosTime } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { RiSettings4Line } from "react-icons/ri";

const images = [
  "/about/inv-technology01-500x530.webp",
  "/about/met-furni-3-520x520.webp",
  "/about/railing-post2.webp",
];
const iconSize = 28;
const iconColor = "#B62E26";
const about_service = [
  {
    icon: <GrUserExpert size={iconSize} color={iconColor} />,
    text: "EXPERIENCE",
    subtext:
      "Trusted clients vouch for our locksmiths’ top-notch work and professionalism.",
  },
  {
    icon: <IoIosTime size={iconSize} color={iconColor} />,
    text: "FLEXIBLE SERVICE",
    subtext:
      "Customizable designs, installations available with professional services for hire.",
  },
  {
    icon: <GrUserManager size={iconSize} color={iconColor} />,
    text: "ACCREDITED COMPANY",
    subtext:
      "Accredited supplier, contractor of invisible grilles – we’ve got you covered!",
  },
  {
    icon: <RiSettings4Line size={iconSize} color={iconColor} />,
    text: "PROFESSIONAL SERVICE",
    subtext:
      "Dedicated team, professional installers and reps prioritize customer happiness.",
  },
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlid = () => {
    setCurrent((prestate) => {
      if (prestate === images.length - 1) return 0;
      return prestate + 1;
    });
  };

  const prevSlide = () => {
    setCurrent((prestate) => {
      if (prestate === 0) return images.length - 1;
      return prestate - 1;
    });
  };

  const sliderDotOnClick = (index: number) => {
    setCurrent(index);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLLIElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLLIElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Define a minimum distance for a valid swipe

    if (distance > minSwipeDistance) {
      //swipe left
      nextSlid();
    } else if (distance < -minSwipeDistance) {
      //swipe right
      prevSlide();
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };
  return (
    <section className="container-layout min-h-[550px] mb-10">
      <h2 className="font-semibold text-[1.75rem] text-gray-600 tracking-widest">
        WHY CHOOSE US
      </h2>
      <div className="w-36 bg-yellow-500 h-[2px] mt-[2px]"></div>

      <div className="w-full flex items-start gap-5 mt-10 ts:flex-wrap md:flex-wrap">
        <div className="flex-grow w-full h-[26rem]">
          {/* <p className="w-96 pb-5 ts:w-full">
            At PreSteel, we produce a wide variety of steel products and offer
            lots of supplementary services to our customers.
          </p> */}
          <div className="flex items-start size-full ts:flex-col">
            <div className="w-full h-full relative ts:w-full">
              <ul className="flex size-full overflow-hidden">
                {images.map((src) => {
                  return (
                    <li
                      key={src}
                      style={{ translate: `-${current * 100}%` }}
                      className="overflow-hidden size-full flex-grow-0 shrink-0 transition-all duration-500"
                    >
                      <Image
                        className="size-full object-cover"
                        src={src}
                        alt=""
                        height={1200}
                        width={1200}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="flex-center absolute top-0 bottom-0">
                <div
                  onClick={prevSlide}
                  className="bg-[#00000079] size-10 cursor-pointer flex-center"
                >
                  <MdNavigateNext
                    className="rotate-180"
                    size={28}
                    color="#fff"
                  />
                </div>
              </div>
              <div className="flex-center absolute top-0 right-0 bottom-0">
                <div
                  onClick={nextSlid}
                  className="bg-[#00000079] size-10 cursor-pointer flex-center"
                >
                  <MdNavigateNext size={28} color="#fff" />
                </div>
              </div>
            </div>
            <div className="px-5 ts:px-0 ts:pt-3">
              <div className="space-y-3 ts:flex ts:gap-3 ts:space-y-0">
                {images.map((item, index) => (
                  <div
                    key={item}
                    onClick={() => sliderDotOnClick(index)}
                    className={`size-3 cursor-pointer overflow-hidden bg-[#EBEBEB] flex-center`}
                  >
                    <div
                      className={`size-full bg-[#B62E26] ${
                        index === current
                          ? "translate-y-0"
                          : "-translate-y-full"
                      } transition-all duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow h-full w-full">
          <ul className="grid grid-cols-2 gap-y-16 gap-x-20 ts:grid-cols-1 ts:gap-y-10">
            {about_service.map((item, index) => (
              <li
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                key={item.text}
                className="space-y-3 group/service ts:w-full ts:flex ts:items-center ts:flex-col"
              >
                <div className="bg-[#EBEBEB] size-16 rounded-full flex-center group-hover/service:-translate-y-1 transition-all duration-500">
                  <div className={`${index === 0 ? "ml-2" : ""}`}>
                    {item.icon}
                  </div>
                </div>
                <h2 className="font-semibold text-[18px] tracking-widest text-gray-700">
                  {item.text}
                </h2>
                <div className="w-16 h-[3px] bg-[#B62E26] group-hover/service:bg-[#FFB426] transition-all duration-500"></div>
                <p className="text-gray-600 ts:text-center">{item.subtext}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
