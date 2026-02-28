import React from "react";
import SectionLayout from "../SectionLayout";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";

export default function OurServices() {
  const services = [
    {name : "Invisible Grill", link : "", img : ""},
    {name : "Metal Furniture", link : "", img : ""},
    {name : "European Motorized Pergola", link : "", img : ""},
    {name : "PVD Coated Grill", link : "", img : ""}
  ];
  return (
    <section className="container-layout">
      <div className="w-full flex items-center">
        <h2 className="flex-grow font-bold font-reg text-3xl tracking-[0.12em] text-gray-700">
          OUR PRODUCTS
        </h2>
        {/* <div className="inline-flex gap-3">
          <GrLinkNext className="rotate-180" size={20} />
          <div className="w-[1px] bg-gray-500 opacity-35"></div>
          <GrLinkNext size={20} />
        </div> */}
      </div>

      <ul className="grid grid-cols-4 gap-5 ts:grid-cols-1 md:grid-cols-1 ts:mt-10">
        {services.map((item, index) => (
          <li key={index} className="w-full bg-red space-y-5 my-10 ts:my-2 flex-center overflow-hidden flex-col group/service relative">
            <div className="w-full h-72 relative flex-center">
              <Image
                className="size-full object-cover h-60"
                src={"/services/services1.jpg"}
                alt="service 1"
                height={1200}
                width={1200}
              />
              <div className="w-[90%] h-[90%] bg-white absolute opacity-0 -translate-y-3 group-hover/service:opacity-100 group-hover/service:translate-y-0 bottom-0 top-[5%] transition-all duration-300"></div>
            </div>

            <h2 className="text-[1.15rem] font-semibold tracking-[0.12em] invisible">
              STILL CLADDING
            </h2>
            <h2 className={`text-[1.15rem] ${index !== 2 ? "pb-3" : ""} text-center uppercase font-semibold tracking-[0.12em] absolute bottom-0 group-hover/service:-translate-y-[155px] group-hover/service:text-red-900 group-hover/service:px-3 group-hover/service:tracking-[0.35em] transition-all duration-300`}>
              {item.name}
            </h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
