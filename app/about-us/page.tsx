import Image from "next/image";
import React from "react";
import AboutDetails from "./AboutDetails";
import { GiHammerNails } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { Metadata } from "next";

const iconcolor = "#FFB426";
const iconsize = 40;

const services_list = [
  {
    icon: <GiHammerNails size={iconsize} color={iconcolor} />,
    title: "Modern Equipment",
    subtitle:
      "Efficient, durable, innovative window grill equipment for modern homes, businesses.",
  },
  {
    icon: <IoPersonOutline size={iconsize} color={iconcolor} />,
    title: "Qualified Staff",
    subtitle:
      "Skilled, reliable, efficient, communicative, detail-oriented staff members",
  },
  {
    icon: <MdOutlineStarOutline size={iconsize} color={iconcolor} />,
    title: "Best Solutions",
    subtitle:
      "We provide top-quality metal solutions for diverse industrial applications worldwide.",
  },
];

const clients = [
  "/about/client1.png",
  "/about/client2.png",
];

export const metadata: Metadata = {
  title: "Grillex: Kolkata's Metal Masters - About Us, Values, Mission",
  description: "Dive into the Grillex story! Discover our legacy of metalwork excellence, core values, and unwavering commitment to providing exceptional customer experiences in Kolkata.",
  alternates : {
    canonical : "/about-us"
  },
};

export default function page() {
  return (
    <main className="h-auto ts:pt-10">
      {/* <PageBanner title="About Us" /> */}

      <AboutDetails />

      <section className="w-full bg-[#F5F5F5] py-20">
        <ul className="w-full flex items-center container-layout flex-wrap gap-10">
          {services_list.map((item) => (
            <li
              key={item.title}
              className="flex-grow basis-60 flex px-7 gap-10"
            >
              <div className="flex items-start">{item.icon}</div>
              <div>
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full container-layout py-20 flex flex-col justify-center space-y-10">
        <h2 className="text-center font-bold tracking-widest text-4xl">
          OUR CLIENTS
        </h2>
        <ul className="w-full flex flex-wrap gap-10 justify-center">
          {clients.map((src, index) => (
            <li className="basis-48" key={index}>
              <Image src={src} alt={src + index} height={1200} width={1200} />
            </li>
          ))}
        </ul>
      </section>
      {/* <section className="w-full bg-[#F5F5F5] grid grid-cols-2 ts:grid-cols-1 min-h-[28rem]">
        <div className="p-20 space-y-5 ts:px-5 ts:py-10">
          <h2 className="font-bold text-4xl">OUR HISTORY</h2>
          <p className="font-[400] text-2xl">
            Celebrating the 60th anniversary of PreSteel’s establishment
          </p>
          <p className="text-gray-500">
            Heuretes, caesium, et mens. Ubi est lotus domus? Nunquam gratia
            cobaltum. Superbus, rusticus decors grauiter fallere de fortis,
            raptus demolitione.
          </p>
        </div>
        <div className="why-choose-us-bg-img  ts:h-52 min-h-[full] transition-all duration-1000 ease-linear"></div>
      </section> */}
    </main>
  );
}
