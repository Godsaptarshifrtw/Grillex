"use client";

import Image from "next/image";
import React, { useState } from "react";
import VTabMenu from "../components/VTabMenu";
import Button from "../components/Button";
import Link from "next/link";

const tabsection = [
  {
    name: "ABOUT US",
    tabheading: "ABOUT US",
    tabdescription:
      "Welcome to <a class = 'text-blue-500 font-semibold' href = '/'>Grillex</a>, your one-stop destination for exceptional <a class = 'text-blue-500 font-semibold' href = '/metal-partition'>metal partitions</a>, <a class = 'text-blue-500 font-semibold' href = '/metal-furniture'>metal furniture</a>, and <a class = 'text-blue-500 font-semibold' href = '/invisible-grill'>invisible grills</a>. At Grillex, we aim to redefine safety and aesthetics since we offer homeowners and businesses a seamless blend of protection and elegance. We strive to become the industry leader in creating innovative and invisible window grilles. As a result, preserving the panoramic views of your spaces.",
    tabimage: "/about/about-prof.webp",
    width: "25rem",
  },
  {
    name: "OUR MISSION",
    tabheading: "OUR MISSION",
    tabdescription:
      "At Grillex, our mission is to lead Kolkata's metal products manufacturing industry by delivering exceptional quality and innovative solutions. We are dedicated to producing durable and aesthetically pleasing metal products that exceed our customers' expectations. Through our commitment to excellence, sustainability, and customer satisfaction, we aim to set new standards in craftsmanship and service in the metal manufacturing sector.",
    tabimage: "/about/our-mission.webp",
    height: "25rem",
  },
  {
    name: "OUR GOALS",
    tabheading: "OUR GOALS",
    tabdescription:
      "At Grillex, our primary objective is to be Kolkata's leading manufacturer of premium metal products. We are committed to producing the highest quality items that meet and exceed industry standards, ensuring durability and reliability in every product. Innovation is at the core of our mission; we continuously strive to enhance our processes and products by incorporating the latest technologies and sustainable practices. Customer satisfaction is paramount to us, and we aim to provide exceptional service and value, building long-lasting relationships based on trust and mutual benefit. <br /> <br /> We aim to establish Grillex as the go-to brand for metal products in Kolkata, recognized for our superior craftsmanship and unwavering integrity. Additionally, we are dedicated to implementing environmentally friendly practices in our manufacturing processes, contributing to a greener future. At Grillex, we are more than just a manufacturer; we are a partner in your success, committed to delivering excellence in every product we create.",
    tabimage: "/about/our-goals.webp",
    height: "25rem",
  },
  {
    name: "COMPANY VALUES",
    tabheading: "COMPANY VALUES",
    tabdescription:
      "At Grillex, a leading metal products manufacturer based in Kolkata, our core values drive our commitment to excellence and innovation. We take pride in producing high-quality metal products that meet the diverse needs of our clients. Our dedication to quality ensures that every product we create is durable and reliable. Embracing cutting-edge technology, we strive to lead the industry with innovative solutions. Integrity is at the heart of our business practices, grounded in honesty, transparency, and ethical conduct. <br /> <br /> We prioritize our customers' needs, delivering customized solutions and exceptional service. Committed to environmental responsibility, we implement sustainable practices in our manufacturing processes. Furthermore, we foster a collaborative work environment, empowering our team to achieve collective success. Grillex is dedicated to upholding these values as we continue to grow and serve our community in Kolkata and beyond.",
    tabimage: "/about/company-value.webp",
    height: "25rem",
  },
];

export default function AboutDetails() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <section className="w-full container-layout flex flex-wrap py-20 ts:space-y-10 md:space-y-10">
      <div
        className={`flex-grow basis-[80%] space-y-6 pr-24 ts:basis-full ts:pr-0 md:basis-full md:pr-0`}
      >
        {currentTabIndex === 0 ? (
          <h1 className="text-4xl font-bold text-gray-800 tracking-widest font-reg">
            {tabsection[currentTabIndex].tabheading}
          </h1>
        ) : (
          <h2 className="text-4xl font-bold text-gray-800 tracking-widest font-reg">
            {tabsection[currentTabIndex].tabheading}
          </h2>
        )}

        <p
          dangerouslySetInnerHTML={{
            __html: tabsection[currentTabIndex].tabdescription,
          }}
          className="text-gray-500 text-justify"
        ></p>
        <div className="w-full flex-center">
          <Image
            className="object-cover"
            style={{
              width: tabsection[currentTabIndex].width,
              height: tabsection[currentTabIndex].height,
            }}
            src={tabsection[currentTabIndex].tabimage}
            alt="about us image"
            height={1200}
            width={1200}
          />
          
        </div>
      </div>
      <div className="flex-grow basis-[20%] space-y-4">
        <h2 className="font-semibold text-2xl tracking-widest">
          10+ YEARS OF EXPERIENCE
        </h2>

        {/* <ul className="w-full">
          {tabsection.map((item, index) => (
            <li
              onClick={() => setCurrentTabIndex(index)}
              className="border-b-[1.5px] py-5 relative group/tabitem cursor-pointer text-sm"
            >
              <span className="font-[400] tracking-widest text-gray-700">
                {item.tabname}
              </span>
              <div
                className={`${
                  currentTabIndex === index ? "w-20" : "w-0"
                } h-[0.15rem] group-hover/tabitem:w-full transition-all duration-300 absolute -bottom-[1px] bg-[#FFB426]`}
              ></div>
            </li>
          ))}
        </ul> */}
        <VTabMenu
          currentTabIndex={currentTabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
          tablist={tabsection}
        />

        {/* <button className="uppercase font-semibold bg-[#B62E26] py-8 tracking-[0.2em] text-white hover:bg-[#FFB426] transition-all duration-300 hover:text-black">
          Contact Us
        </button> */}
        <Link href={"/contact-us"} className="block">
        <Button className="w-full">Contact Us</Button>
        </Link>
      </div>
    </section>
  );
}
